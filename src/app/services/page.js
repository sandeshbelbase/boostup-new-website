"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allServices = [
  {
    title: "House Cleaning",
    description: "Comprehensive home cleaning tailored to your lifestyle. We ensure every room is spotless, sanitized, and refreshing.",
    extraInfo: "Our detailed check-list covers vacuuming, mopping, dusting of all surfaces, wiping down baseboards, and intensive kitchen/bathroom sanitation. We treat your home with the utmost respect so you can come back to a perfect environment.",
    image: "/images/house.jpeg",
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

  {
    title: "Gardening & Exterior Maintenance",
    description: "Complete outdoor care including lawn mowing, pruning, and debris removal to boost your property's curb appeal.",
    extraInfo: "Your exterior is just as important as the interior. Our crew will trim hedges, clear walkways, weed garden beds, and haul away green waste to transform your outdoor living space.",
    image: "/images/garden.jpeg",
  },
    {
    title: "Domestic Assistance",
    description: "Intensive cleaning targeting grease, grime, and hard-to-reach areas that regular maintenance cleaning misses.",
    extraInfo: "Perfect for spring cleaning! We will pull out appliances to clean behind them, scrub tile grout, clean inside cabinets, and wash blinds to restore your space to a brand-new feel.",
    image: "/images/domestic.jpeg",
  },
  {
    title: "Builder Cleaning",
    description: "Detailed post-construction cleanup to safely remove heavy dust, paint marks, and debris after your remodeling project.",
    extraInfo: "Construction dust hides everywhere. We perform specialized air-vent wipe downs, intensive floor detailing, and window washing to make your newly renovated space livable and air-safe.",
    image:"/images/builder.jpeg"
    },
  {
    title: "Deep Detail Clean",
    description: "Intensive cleaning targeting grease, grime, and hard-to-reach areas that regular maintenance cleaning misses.",
    extraInfo: "Perfect for spring cleaning! We will pull out appliances to clean behind them, scrub tile grout, clean inside cabinets, and wash blinds to restore your space to a brand-new feel.",
    image:"/images/deep.jpeg"  
  },
  {
    title: "Mould Clean",
    description: "Intensive cleaning targeting grease, grime, and hard-to-reach areas that regular maintenance cleaning misses.",
    extraInfo: "Perfect for spring cleaning! We will pull out appliances to clean behind them, scrub tile grout, clean inside cabinets, and wash blinds to restore your space to a brand-new feel.",
    image: "/images/mould.jpeg",
  },
  
];

function ServiceCard({ service, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all h-full flex flex-col cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative w-full h-64 overflow-hidden shrink-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1f7e51] transition-colors line-clamp-1">
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          {service.description}
        </p>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-gray-700 font-medium leading-relaxed pb-6 pt-2 border-t border-gray-100">
                {service.extraInfo}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          className="text-[#1f7e51] font-bold self-start mt-auto flex items-center gap-2 group/btn bg-[#187f50]/10 px-4 py-2 rounded-lg hover:bg-[#187f50] hover:text-white transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? 'Show Less' : 'Learn More'} 
          <span className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover/btn:translate-x-1'}`}>
            →
          </span>
        </button>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <div className="bg-[#f8faf9] min-h-screen pt-16 pb-24">
      {/* Subtle top background gradient to mesh with navbar */}
      <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Complete Services
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          From the corners of your living room right out to your front garden, we offer a powerful suite of professional solutions to boost up your space!
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {allServices.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
