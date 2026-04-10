"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaLeaf, FaSmile, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt className="w-10 h-10 text-[#187f50]" />,
    title: "Fully Insured & Trusted",
    description: "Our team is fully insured and background-checked, giving you peace of mind every time.",
  },
  {
    icon: <FaLeaf className="w-10 h-10 text-[#187f50]" />,
    title: "Eco-Friendly Products",
    description: "We use environmentally friendly cleaning products that are safe for your family and pets.",
  },
  {
    icon: <FaSmile className="w-10 h-10 text-[#187f50]" />,
    title: "Satisfaction Guaranteed",
    description: "We don’t consider a job done until you are 100% satisfied with the results.",
  },
  {
    icon: <FaUsers className="w-10 h-10 text-[#187f50]" />,
    title: "Experienced Professionals",
    description: "Our cleaning specialists are trained, professional, and highly experienced.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 relative bg-white overflow-hidden border-y border-gray-100/50">
      {/* Subtle modern grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="container relative z-10 text-center mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us ✨
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:shadow-[0_8px_30px_rgba(24,127,80,0.1)] transition-all cursor-pointer flex flex-col items-center text-center transform hover:-translate-y-1 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="mb-6 p-4 rounded-full bg-gray-50 group-hover:bg-[#187f50]/5 transition-colors">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
