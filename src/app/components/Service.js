"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Residential Cleaning",
    description: "Eco‑friendly, thorough home cleaning for a fresh and spotless living space.",
    image: "https://images.pexels.com/photos/4862376/pexels-photo-4862376.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Commercial Cleaning",
    description: "Professional office and commercial cleaning services for a pristine workspace.",
    image: "https://images.pexels.com/photos/6964288/pexels-photo-6964288.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Surface & Detail Cleaning",
    description: "Expert surface and detail cleaning using safe and effective methods.",
    image: "https://images.pexels.com/photos/4968386/pexels-photo-4968386.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  // Add more services here if desired, but only show first 3 on homepage
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative w-full h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Services Button */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/services"
            className="inline-block px-8 py-4 bg-[#187f50] text-white rounded-md font-semibold shadow-lg hover:bg-[#136640] transition"
          >
            See All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
