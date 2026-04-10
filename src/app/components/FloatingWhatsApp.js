"use client";

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  // Australian format for 0450 036 511
  const phoneNumber = "61450036511";
  const defaultMessage = "Hi Boostup Cleaning! 👋 I am interested in your cleaning services and would like to get a free quote.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[200] bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:bg-[#20b858] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-all flex items-center justify-center group"
      initial={{ opacity: 0, scale: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp className="text-3xl md:text-4xl relative z-10" />
      
      {/* Interactive Tooltip prompt sliding out on hover */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:-right-2 before:border-[6px] before:border-transparent before:border-l-white flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Chat with us!
      </span>
      
      {/* Slow Ping Pulse behind the button */}
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30 pointer-events-none duration-1000"></span>
    </motion.a>
  );
}
