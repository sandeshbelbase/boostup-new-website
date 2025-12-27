"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = ["Home", "About Us", "Our Services", "Service Areas", "Contact Us"];

  return (
    <header className="w-100flex flex-wrap pl-0 mb-0 list-none">
      {/* TOP HEADER */}
      <div className="h-[144px] px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Boostup Cleaning Services Logo"
                width={160}
                height={60}
                className="w-[200px]"
              />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400 w-6 h-6 animate-bounce" />
              <div className="text-sm">
                <p className="font-semibold">Email Us:</p>
                <a
                  href="mailto:contact@boostupcleaningservices.au"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  contact@boostupcleaningservices.au
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-yellow-400 w-6 h-6 animate-bounce" />
              <div className="text-sm">
                <p className="font-semibold">Call Us:</p>
                <a
                  href="tel:+610450036511"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  0450 036 511
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMobileOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* CENTERED WHITE NAVBAR */}
      <nav className=" relative shadow-md mr-[10%] ml-[10%] rounded-[7px] shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]">
        <div className="absolute z-50 w-full top-[-25px] rounded-[7px] bg-white max-w-7xl mx-auto px-4">
          <ul className=" lg:flex justify-center gap-12 py-4 font-medium text-gray-800">
            {menuItems.map((item, idx) => (
              <li key={idx} className="relative group cursor-pointer">
                <Link
                  href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="transition-colors duration-300 hover:text-[#1E7E51] font-semibold"
                >
                  {item}
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
        className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg transform transition-transform duration-500 z-50 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={() => setMobileOpen(false)}>
            <FaTimes className="text-xl" />
          </button>
        </div>
        <ul className="flex flex-col p-6 gap-6 text-gray-800 font-medium">
          {menuItems.map((item, idx) => (
            <li key={idx} className="hover:text-[#1E7E51] transition-all duration-300 transform hover:scale-105">
              <Link
                href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
    </header>
  );
}
