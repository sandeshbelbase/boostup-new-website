"use client";

import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import { FaPhoneAlt, FaEnvelope, FaChevronRight } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-12 gap-12 mb-16">

          {/* Info Column */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="inline-block mb-8 w-48 sm:w-[220px]">
              <Image
                src="/images/logo.png"
                alt="Boostup Cleaning Service Logo"
                width={180}
                height={60}
                className="w-full h-auto drop-shadow-md hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
              Delivering professional, high-quality, and eco-friendly cleaning services for homes and businesses. Let us boost up your space!
            </p>
            <ul className="space-y-5">
              <li>
                <a href="mailto:contact@boostupcleaningservices.au" className="flex items-center gap-4 hover:text-white transition-colors group">
                  <span className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[#187f50] group-hover:bg-[#187f50] group-hover:text-white transition-colors shadow-inner"><FaEnvelope /></span>
                  <span className="truncate">contact@boostupcleaningservices.au</span>
                </a>
              </li>
              <li>
                <a href="tel:+610450036511" className="flex items-center gap-4 hover:text-white transition-colors group">
                  <span className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-[#187f50] group-hover:bg-[#187f50] group-hover:text-white transition-colors shadow-inner"><FaPhoneAlt /></span>
                  0450 036 511
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-500">
                <span className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center font-black text-[10px] text-gray-400 border border-gray-700">ABN</span>
                <span className="font-medium tracking-widest text-gray-400">34 660 766 361</span>
              </li>
            </ul>
          </div>

          {/* Services Column (Non-Clickable) */}
          <div className="md:col-span-3 lg:col-span-4 lg:pl-12">
            <h3 className="text-lg font-bold text-white mb-8 uppercase tracking-widest relative inline-block">
              Our Services
              <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-[#187f50] rounded-full"></span>
            </h3>
            <ul className="space-y-4 font-medium">
              <li className="flex items-center gap-3 py-1 text-gray-400 hover:text-white transition-colors">
                <FaChevronRight className="text-[#187f50] text-xs" />
                <span>Home Cleaning</span>
              </li>
              <li className="flex items-center gap-3 py-1 text-gray-400 hover:text-white transition-colors">
                <FaChevronRight className="text-[#187f50] text-xs" />
                <span>Commercial Cleaning</span>
              </li>
              <li className="flex items-center gap-3 py-1 text-gray-400 hover:text-white transition-colors">
                <FaChevronRight className="text-[#187f50] text-xs" />
                <span>Renovation / Construction Cleaning</span>
              </li>
              <li className="flex items-center gap-3 py-1 text-gray-400 hover:text-white transition-colors">
                <FaChevronRight className="text-[#187f50] text-xs" />
                <span>Bond / End of Lease Cleaning</span>
              </li>
              <li className="flex items-center gap-3 py-1 text-gray-400 hover:text-white transition-colors">
                <FaChevronRight className="text-[#187f50] text-xs" />
                <span>Deep Clean Services</span>
              </li>
            </ul>
          </div>

          {/* Facebook Plugin Column */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold text-white mb-8 uppercase tracking-widest relative inline-block">
              Follow Us
              <span className="absolute -bottom-3 left-0 w-1/2 h-1 bg-[#187f50] rounded-full"></span>
            </h3>

            {/* FB SDK Injection */}
            <div id="fb-root"></div>
            <Script id="facebook-jssdk" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0" strategy="lazyOnload" crossOrigin="anonymous" />

            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-800 relative z-10 w-fit min-h-[130px] flex items-center justify-center p-2">
              <div
                className="fb-page"
                data-href="https://www.facebook.com/profile.php?id=100083309322579"
                data-tabs=""
                data-width="340"
                data-height=""
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/profile.php?id=100083309322579"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/profile.php?id=100083309322579" className="text-blue-600 font-bold hover:underline">
                    BOOST UP Cleaning Service
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-medium">
          <div className="copyright text-center md:text-left">
            &copy; {currentYear} BoostUp Cleaning Service. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2 justify-center">
            <span>Crafted by</span>
            <a href="https://www.logicminers.au" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-all flex items-center gap-2 group border border-gray-800 px-3 py-1.5 rounded-full hover:bg-gray-800">
              <span className="group-hover:text-white transition-colors">Logic Miners</span>
              <span className="text-lg">☕</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}