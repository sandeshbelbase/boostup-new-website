"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  {
    question: "How much is bond back guarantee cleaning?",
    answer: "Starts from $500 for a 2-bedroom. Final price depends on condition. Free estimate or call for inspection."
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: "No, you do not need to be home. As long as we have a way to access your property (like a spare key or garage code), our team can clean while you are at work or out running errands. We are fully insured and background-checked for your peace of mind."
  },
  {
    question: "Do you bring your own cleaning supplies?",
    answer: "Yes! We provide all the necessary, high-quality, eco-friendly cleaning supplies and equipment. If you have a specific product you'd prefer us to use, just leave it out and let us know!"
  },
  {
    question: "Are your cleaners insured and background-checked?",
    answer: "Absolutely. Safety and trust are our top priorities. Every single member of our cleaning staff undergoes a rigorous background check and is fully bonded and insured."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand that life happens. We kindly ask for at least 48 hours notice if you need to cancel or simply reschedule your appointment, so we can adjust our team's schedule."
  },
  {
    question: "What if I am not satisfied with the cleaning?",
    answer: "We offer a 100% Satisfaction Guarantee. If you are not completely happy with any area we've cleaned, contact us within 24 hours, and we will come back and re-clean that area completely free of charge."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions ❓
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Got questions? We've got answers. Here are the most common things people ask before booking.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-gray-50"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-lg text-gray-900">{faq.question}</span>
                <FaChevronDown 
                  className={`text-[#187f50] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed bg-white border-t border-gray-100 p-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
