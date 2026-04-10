"use client";

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaLocationArrow } from 'react-icons/fa';

const locations = [
  "Geurie NSW 2818",
  "Warren NSW 2824",
  "Trangie NSW 2823",
  "Gilgandra NSW 2827",
  "Mendooran NSW 2842",
  "Narromine NSW 2821",
  "Wongarbon NSW 2831",
  "Wellington NSW 2820",
  "Rawsonville NSW 2830",
  "Brocklehurst NSW 2830",
  "Dubbo Regional Council area"
];

export default function ServiceAreas() {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Decorative subtle background map pattern or blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#187f50]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Service Areas 📍
          </h2>
          
          <div className="max-w-3xl mx-auto bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-sm mb-10">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#187f50] text-white rounded-full flex items-center justify-center text-3xl shadow-lg ring-8 ring-[#e8f6ef]">
                <FaLocationArrow className="transform -rotate-45 relative right-0.5 bottom-0.5" />
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              We are prominently based in <strong className="text-[#187f50] font-black">Dubbo (NSW 2830)</strong> and provide our complete suite of cleaning services locally. However, we're extending our reach and happily serve nearby surrounding regions!
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {locations.map((location, index) => (
            <span 
              key={index} 
              className="bg-white border border-[#187f50]/15 text-gray-700 font-semibold px-5 py-2.5 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_20px_rgba(24,127,80,0.15)] hover:border-[#187f50]/40 transition-all cursor-default flex items-center gap-2 group"
            >
              <FaMapMarkerAlt className="text-[#187f50]/60 group-hover:text-[#187f50] transition-colors" />
              {location}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
