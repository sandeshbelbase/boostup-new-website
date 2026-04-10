"use client";

import { motion } from 'framer-motion';
import { FaBuilding, FaHospital, FaDumbbell, FaGraduationCap, FaCoffee, FaHotel } from 'react-icons/fa';

const clients = [
  { name: "Ram Insurance", icon: <FaBuilding className="text-4xl" /> },
  { name: "City Rehab", icon: <FaHospital className="text-4xl" /> },
  { name: "Apex Gym", icon: <FaDumbbell className="text-4xl" /> },
  { name: "Green Valley", icon: <FaGraduationCap className="text-4xl" /> },
  { name: "Urban Cafe", icon: <FaCoffee className="text-4xl" /> },
  { name: "Downtown Suites", icon: <FaHotel className="text-4xl" /> },
];

// Duplicate the array to create a seamless infinite loop
const duplicatedClients = [...clients, ...clients];

export default function WorkDone() {
  return (
    <section className="py-24 relative bg-gray-50 overflow-hidden border-y border-gray-100/50">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#187f50]/5 rounded-full blur-[80px] pointer-events-none translate-x-[-10%]"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#187f50]/5 rounded-full blur-[80px] pointer-events-none translate-x-[10%]"></div>

      <div className="container relative z-10 mx-auto px-4 text-center mb-16">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Who We've Worked For 🤝
        </motion.h2>
      </div>

      {/* Infinite scrolling logo slider */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-scroll hover:pause whitespace-nowrap w-[200%] gap-12 md:gap-24 px-4 items-center h-24">
          {duplicatedClients.map((client, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 flex items-center gap-4 text-gray-400 hover:text-[#187f50] transition-colors duration-300 cursor-pointer"
            >
              <div>{client.icon}</div>
              <span className="text-2xl font-black uppercase tracking-widest">{client.name}</span>
            </div>
          ))}
        </div>

        {/* Gradient fades for smooth edge transitions */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
      </div>

      {/* Custom Styles for Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 24px)); } /* Adjust half width */
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
