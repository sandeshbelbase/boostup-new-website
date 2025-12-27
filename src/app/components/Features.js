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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition cursor-pointer flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
