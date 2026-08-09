import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const resend = new Resend(process.env.RESEND_API_KEY);

const ratelimit = new Ratelimit({
  redis: new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  }),
  // 5 submissions per IP per hour
  limiter: Ratelimit.slidingWindow(5, "1 h"),
  prefix: "contact-form",
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FILL_TIME_MS = 3000; // reject submissions faster than a human could type

function jsonError(message, status) {
  return Response.json({ errors: [{ message }] }, { status });
}

async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret, response: token, remoteip: ip }),
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(request) {
  const origin = request.headers.get("origin");
  const allowedOrigin = process.env.ALLOWED_ORIGIN;
  if (process.env.NODE_ENV === "production" && allowedOrigin && origin !== allowedOrigin) {
    return jsonError("Request origin not allowed.", 403);
  }

  const ip = request.headers.get("x-nf-client-connection-ip") || request.headers.get("x-forwarded-for") || "unknown";

  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return jsonError("Too many submissions. Please try again later.", 429);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError("Invalid request body.", 400);
  }

  const { fullname, email, yourquery, company, formRenderedAt, turnstileToken } = body;

  // Honeypot: real users never fill this hidden field
  if (company) {
    return Response.json({ ok: true });
  }

  // Time trap: bots submit near-instantly
  if (!formRenderedAt || Date.now() - Number(formRenderedAt) < MIN_FILL_TIME_MS) {
    return jsonError("Submission rejected.", 400);
  }

  if (!fullname || !email || !yourquery) {
    return jsonError("All fields are required.", 400);
  }
  if (!EMAIL_RE.test(email)) {
    return jsonError("Please enter a valid email address.", 400);
  }
  if (fullname.length > 200 || email.length > 200 || yourquery.length > 5000) {
    return jsonError("Submission too long.", 400);
  }

  if (!turnstileToken || !(await verifyTurnstile(turnstileToken, ip))) {
    return jsonError("Captcha verification failed.", 400);
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New query from ${fullname} (Boostup website)`,
      text: `Name: ${fullname}\nEmail: ${email}\n\nQuery:\n${yourquery}`,
    });

    if (error) {
      console.error("Resend send failed:", error);
      return jsonError("Could not send your message. Please try again shortly.", 502);
    }

    console.log("Contact email sent:", data.id);
  } catch (err) {
    console.error("Resend send failed:", err);
    return jsonError("Could not send your message. Please try again shortly.", 502);
  }

  return Response.json({ ok: true });
}
