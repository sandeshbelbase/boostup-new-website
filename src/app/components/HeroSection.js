"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50">

      {/* Cleaning Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-bg-pan"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Soft Wash Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/90" />

      {/* Moving Cleaning Mist */}
      <span className="absolute top-24 left-16 w-72 h-72 bg-[#187f50]/20 rounded-full blur-3xl animate-mist" />
      <span className="absolute bottom-32 right-24 w-96 h-96 bg-[#187f50]/15 rounded-full blur-3xl animate-mist-slow" />
      <span className="absolute top-1/2 left-1/3 w-48 h-48 bg-[#187f50]/25 rounded-full blur-2xl animate-mist" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 text-sm font-semibold text-[#187f50] uppercase tracking-wide">
            Service with Professional Touch
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Professional Cleaning <br />
            That Feels Refreshing
          </h1>

          <p className="mt-6 text-lg text-gray-700 max-w-xl">
            Residential and commercial cleaning delivered with care, consistency,
            and attention to detail. Your space — truly refreshed.
          </p>

          {/* Benefits */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Fully Insured & Trusted Team",
              "Eco-Friendly Cleaning Products",
              "Clear & Honest Pricing",
              "100% Satisfaction Guarantee",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.12 }}
                className="flex items-center gap-3"
              >
                <FaCheckCircle className="text-[#187f50]" />
                <span className="text-sm font-medium text-gray-800">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="bg-[#187f50] text-white px-8 py-4 rounded-md font-semibold hover:bg-[#136640] transition shadow-lg"
            >
              Get a Free Quote
            </Link>

            <a
              href="tel:0450036511"
              className="flex items-center gap-2 px-8 py-4 rounded-md font-semibold border border-[#187f50] text-[#187f50] hover:bg-[#187f50] hover:text-white transition"
            >
              <FaPhoneAlt />
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="hidden lg:block"
        >
          <div className="bg-white rounded-2xl p-8 shadow-2xl border backdrop-blur">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Cleaning You Can Feel
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A calm, fresh experience — just like a professionally cleaned
              space should feel.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
