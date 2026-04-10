"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FaEnvelope, FaPhone, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about-us" },
    { name: "Our Services", href: "/services" },
    { name: "Service Areas", href: "/#service-areas" },
    { name: "Contact Us", href: "/#contact-us" },
  ];

  // Custom handler to fix Next.js anchor click behavior when already on the page
  const handleNavClick = (e, item) => {
    if (item.href.startsWith("/#")) {
      // If we are already on the homepage, manually scroll to section to guarantee it works even if hash hasn't changed
      if (pathname === "/") {
        e.preventDefault();
        const hash = item.href.replace("/", "");
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          // Update URL hash without causing a page reload scroll conflict
          window.history.pushState(null, "", hash);
        }
      }
      // If not on homepage, let the Link naturally route to '/' first
    }
    
    // Always close mobile menu upon clicking any link
    setMobileOpen(false);
  };

  return (
    <header className="w-full flex-wrap pl-0 mb-0 list-none">
      {/* TOP HEADER */}
      <div className="bg-primary text-white py-4 lg:py-6 lg:h-[144px]">
        <div className="container flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
          
          {/* Top Row for Mobile (Logo + Hamburger) */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Boostup Cleaning Services Logo"
                width={160}
                height={60}
                className="w-[160px] md:w-[200px]"
              />
            </Link>
            
            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-white text-2xl p-2 focus:outline-none"
              onClick={() => setMobileOpen(true)}
            >
              <FaBars />
            </button>
          </div>

          {/* Contact Info (Row on desktop, fully hidden on mobile to rely on floating buttons) */}
          <div className="hidden lg:flex flex-row items-center gap-8">
            {/* EMAIL */}
            <div className="flex items-center gap-3 bg-transparent px-4 py-2 lg:p-0 rounded-none w-auto justify-center">
              <FaEnvelope className="text-yellow-400 w-6 h-6 animate-bounce" />
              <div className="text-sm text-left">
                <p className="font-semibold block">Email Us:</p>
                <a
                  href="mailto:contact@boostupcleaningservices.au"
                  className="hover:text-yellow-400 transition duration-300 font-medium"
                >
                  contact@boostupcleaningservices.au
                </a>
              </div>
            </div>
            
            {/* PHONE */}
            <div className="flex items-center gap-3 bg-transparent px-4 py-2 lg:p-0 rounded-none w-auto justify-center">
              <FaPhone className="text-yellow-400 w-6 h-6 animate-bounce" />
              <div className="text-sm text-left">
                <p className="font-semibold block">Call Us:</p>
                <a
                  href="tel:+610450036511"
                  className="hover:text-yellow-400 transition duration-300 font-bold tracking-wide"
                >
                  0450 036 511
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* CENTERED WHITE NAVBAR (DESKTOP ONLY) */}
      <nav className="hidden lg:block relative shadow-md mr-[10%] ml-[10%] rounded-[7px] shadow-[0_4px_4px_0_rgba(0,0,0,0.05)] bg-white z-50">
        <div className="absolute z-50 w-full top-[-25px] rounded-[7px] bg-white max-w-7xl mx-auto px-4">
          <ul className="flex justify-center gap-12 py-4 font-medium text-gray-800">
            {menuItems.map((item, idx) => (
              <li key={idx} className="relative group cursor-pointer">
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="transition-colors duration-300 hover:text-[#1E7E51] font-semibold"
                >
                  {item.name}
                </Link>
                {/* Hover underline animation */}
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#1E7E51] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-white shadow-xl transform transition-transform duration-500 z-[100] ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold text-lg text-[#1f7e51]">Menu</span>
          <button onClick={() => setMobileOpen(false)}>
            <FaTimes className="text-xl text-gray-600" />
          </button>
        </div>
        <ul className="flex flex-col p-6 gap-6 text-gray-800 font-medium tracking-wide">
          {menuItems.map((item, idx) => (
            <li key={idx} className="hover:text-[#1E7E51] transition-all duration-300 transform hover:translate-x-2">
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="block w-full py-1"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[90] backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </header>
  );
}
