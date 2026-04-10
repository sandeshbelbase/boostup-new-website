"use client";

import { motion } from 'framer-motion';
import { FaPhoneAlt, FaBroom, FaSmileBeam } from 'react-icons/fa';

const steps = [
  {
    number: "01",
    title: "Request a Free Quote",
    description: "Contact us online or give us a call. We'll provide a fast, transparent estimate tailored to your exact needs.",
    icon: <FaPhoneAlt className="text-3xl text-white" />
  },
  {
    number: "02",
    title: "We Clean Your Space",
    description: "Our professional, fully equipped team arrives on time and transforms your property using eco-friendly products.",
    icon: <FaBroom className="text-3xl text-white" />
  },
  {
    number: "03",
    title: "You Relax & Enjoy",
    description: "Walk into a spotless, fresh-smelling space. If you're not 100% satisfied, we return and fix it for free.",
    icon: <FaSmileBeam className="text-3xl text-white" />
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#f4fbf7] border-y border-[#187f50]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            How It Works 🚀
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Booking a professional cleaner shouldn't be stressful. We've simplified our process into three easy steps.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[4rem] left-[15%] right-[15%] h-1 border-t-2 border-dashed border-[#187f50]/30 z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative z-10 flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 rounded-full bg-[#187f50] flex items-center justify-center mb-6 shadow-xl border-4 border-[#e8f6ef] group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full flex-grow border border-[#187f50]/5 relative overflow-hidden">
                <span className="absolute -top-4 -right-4 text-7xl font-black text-gray-50 opacity-50 z-0 select-none">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
