"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "House Cleaning",
    description: "Comprehensive home cleaning tailored to your lifestyle. We ensure every room is spotless, sanitized, and refreshing.",
    extraInfo: "Our detailed check-list covers vacuuming, mopping, dusting of all surfaces, wiping down baseboards, and intensive kitchen/bathroom sanitation. We treat your home with the utmost respect so you can come back to a perfect environment.",
    image: "/images/house.jpeg",
  },
  {
  title: "NDIS Cleaning",
  description: "Reliable cleaning support tailored to individual needs. We help maintain a clean, safe, and comfortable home environment.",
  extraInfo: "Our detailed checklist covers vacuuming, mopping, dusting, surface cleaning, kitchen and bathroom sanitation, and other household cleaning tasks. We work respectfully around individual routines and preferences, helping create a hygienic and welcoming space.",
  image: "/images/ndis.jpeg",
  },
  {
    title: "Commercial & Office Cleaning",
    description: "Professional workplace cleaning that boosts productivity and leaves a lasting impression on your clients and staff.",
    extraInfo: "We customize our cleaning schedules around your business hours. From breakroom deep cleans to desk sanitization and trash removal, we maintain a hygienic environment that keeps your workforce healthy.",
    image:"images/office.jpeg"
  },
    {
    title: "Window & Exterior Cleaning",
    description: "Professional workplace cleaning that boosts productivity and leaves a lasting impression on your clients and staff.",
    extraInfo: "We customize our cleaning schedules around your business hours. From breakroom deep cleans to desk sanitization and trash removal, we maintain a hygienic environment that keeps your workforce healthy.",
    image: "images/commercial.jpeg",
  },
  {
    title: "Bond / End of Lease Cleaning",
    description: "Get your full deposit back. We specialize in deep end-of-lease cleans that strict landlords and real estate agents demand.",
    extraInfo: "We know exactly what property managers look for during final inspections. We tackle stubborn oven grease, window tracks, carpet spot treatments, and wall marks to guarantee a flawless handover.",
    image: "/images/bond.jpeg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className=" container text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.slice(0, 4).map((service, index) => (
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
                  className="w-full h-full object-cover"
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
