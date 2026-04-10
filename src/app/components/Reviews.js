"use client";

import { motion } from 'framer-motion';
import Script from 'next/script';

export default function Reviews() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-10">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What Customers Say About Us 💬
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Real feedback from our satisfied clients. Don't just take our word for it—see why so many trust us with their spaces.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-2 md:px-6">
        {/* Safely inject the Elfsight script for Next.js */}
        <Script src="https://static.elfsight.com/platform/platform.js" strategy="afterInteractive" />
        
        <div className="bg-gray-50 rounded-3xl p-4 md:p-8 shadow-inner border border-gray-100">
          <div className="elfsight-app-83c7e43f-8c88-4a70-9fae-54187bfe1b67" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
}
