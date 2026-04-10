"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function CTA() {
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    
    const form = event.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setStatus({ type: 'success', message: "Thank you! We've received your message! We'll get back to you soon." });
        form.reset();
      } else {
        const errorData = await response.json();
        if (Object.hasOwn(errorData, "errors")) {
          setStatus({ type: 'error', message: errorData["errors"].map((error) => error["message"]).join(", ") });
        } else {
          setStatus({ type: 'error', message: "Oops! There was a problem submitting your form." });
        }
      }
    } catch (error) {
      setStatus({ type: 'error', message: "Oops! There was a problem submitting your form." });
    }
    
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 relative bg-[#f8faf9] border-t border-[#187f50]/10">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
           <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get In Touch ✉️
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Tell us about your space, and get a completely free estimate with consultation.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row">
          
          {/* Left Side: Contact Form */}
          <div className="p-8 md:p-12 lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form action="https://formspree.io/f/mwkgpjye" method="POST" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full name *</label>
                    <input 
                      type="text" 
                      name="fullname" 
                      required 
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#187f50] focus:ring-2 focus:ring-[#187f50]/20 transition-all bg-gray-50 focus:bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#187f50] focus:ring-2 focus:ring-[#187f50]/20 transition-all bg-gray-50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your query *</label>
                  <textarea 
                    name="yourquery" 
                    required 
                    rows="5"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none focus:border-[#187f50] focus:ring-2 focus:ring-[#187f50]/20 transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 bg-[#1f7e51] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#135d3b] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane />
                  {isSubmitting ? 'Sending Request...' : 'Send Message'}
                </button>

                {status && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-5 rounded-xl font-medium text-sm flex items-center gap-3 ${status.type === 'success' ? 'bg-[#e8f6ef] text-[#135d3b] border border-[#187f50]/20' : 'bg-red-50 text-red-700 border border-red-200'}`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

          {/* Right Side: Contact Details & Map */}
          <div className="bg-[#1f7e51] p-8 md:p-12 lg:w-2/5 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h3 className="text-2xl font-black mb-8 opacity-90">Our Details</h3>
              
              <ul className="space-y-6 mb-10">
                <li className="flex items-start gap-4 hover:translate-x-1 transition-transform cursor-default">
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm shadow-inner"><FaMapMarkerAlt className="text-xl" /></div>
                  <div>
                    <h4 className="font-bold opacity-80 text-sm mb-1 uppercase tracking-wider">Location</h4>
                    <span className="font-medium">63 Macleay Street, Dubbo, 2830</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 hover:translate-x-1 transition-transform">
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm shadow-inner"><FaPhoneAlt className="text-xl" /></div>
                  <div>
                    <h4 className="font-bold opacity-80 text-sm mb-1 uppercase tracking-wider">Phone</h4>
                    <a href="tel:+610450036511" className="font-medium hover:underline">0450 036 511</a>
                  </div>
                </li>
                <li className="flex items-start gap-4 hover:translate-x-1 transition-transform">
                  <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm shadow-inner"><FaEnvelope className="text-xl" /></div>
                  <div>
                    <h4 className="font-bold opacity-80 text-sm mb-1 uppercase tracking-wider">Email</h4>
                    <a href="mailto:contact@boostupcleaningservices.au" className="font-medium hover:underline block truncate max-w-[200px] md:max-w-none">contact@boostupcleaningservices.au</a>
                  </div>
                </li>
              </ul>

              {/* Embedded Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-2xl h-56 relative bg-black/20 ring-4 ring-white/10 transition-transform hover:scale-[1.02] duration-300">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.5937457100786!2d148.60808377619693!3d-32.242103536654184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b0f71b79d0dfbb7%3A0xb508657de7751fba!2s63%20MacLeay%20St%2C%20Dubbo%20NSW%202830!5e0!3m2!1sen!2sau!4v1759583683040!5m2!1sen!2sau" 
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Boostup Cleaning Location Map"
                ></iframe>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
