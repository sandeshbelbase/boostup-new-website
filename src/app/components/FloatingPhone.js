"use client";

import { FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FloatingPhone() {
  return (
    <motion.a
      href="tel:+610450036511"
      className="lg:hidden fixed bottom-24 right-6 z-[200] bg-[#187f50] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(24,127,80,0.4)] hover:bg-[#135d3b] transition-all flex items-center justify-center group"
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaPhoneAlt className="text-3xl relative z-10" />
      
      {/* Interactive Tooltip prompt sliding out on hover */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-2 before:border-[6px] before:border-transparent before:border-l-white flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        Call us now!
      </span>

      {/* Slow Ping Pulse behind the button */}
      <span className="absolute inset-0 rounded-full animate-ping bg-[#187f50] opacity-40 pointer-events-none duration-1000 delay-500"></span>
    </motion.a>
  );
}
