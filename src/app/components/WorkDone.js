"use client";

import { motion } from "framer-motion";

const clients = [
  {
    image: "./images/raywhite.png",
    alt: "Ray White",
  },
  {
    image: "./images/raine.webp",
    alt: "Raine",
  },
  {
    image: "./images/Pinnacle.svg",
    alt: "Elder Real Estate",
  },
  {
    image: "./images/matthansen.png",
    alt: "Matt-Hansen",
  },
  {
    image: "./images/bob.png",
    alt: "Bob & Berry",
  },
  {
    image: "./images/ndis.svg",
    alt: "NDIS",
  },
  {
    image: "./images/allianz.svg",
    alt: "Allianz",
  },
  {
    image: "./images/eml.svg",
    alt: "EML",
  },
  {
    image: "./images/lc.webp",
    alt: "LC Group",
  },
  {
    image: "./images/altius.png",
    alt: "Altius",
  },
];

// Duplicate for seamless slider loop
const duplicatedClients = [...clients, ...clients];

export default function WorkDone() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-20">

      {/* Background glow - safe from hydration mismatches */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#187f50]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#187f50]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            100+ Trusted Businesses We’ve Worked For In NSW
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Real estate, retail, offices, strata & commercial clients
          </p>
        </motion.div>

        {/* Logo Slider Container */}
        <div className="relative overflow-hidden w-full">

          {/* Track wrapper using arbitrary Tailwind values for native CSS animation */}
          <div className="flex items-center gap-20 w-max animate-[scroll_35s_linear_infinite] hover:[animation-play-state:paused] will-change-transform">
            {duplicatedClients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <img
                  src={client.image}
                  alt={client.alt}
                  loading="lazy"
                  className="w-[160px] h-[80px] object-contain hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>

          {/* Left Side Blur Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>

          {/* Right Side Blur Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      {/* Inject keyframes via a tiny inline style tag that won't confuse React's hydration parser 
        since it uses standard global CSS animation variables instead of dynamic hashed class definitions.
      */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}