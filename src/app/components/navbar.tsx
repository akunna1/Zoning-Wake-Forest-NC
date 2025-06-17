"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Map", href: "/map" },
    { name: "Definitions", href: "/definitions" },
    { name: "Analysis", href: "/analysis" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className="
        sticky top-0 z-50
        bg-white/60
        backdrop-blur-lg
        border-b border-yellow-300/30
        shadow-md
        text-base
      "
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex items-center justify-between font-medium text-gray-900">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-black hover:scale-110">
          Zoning for Dummies
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {links.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="hover:text-yellow-600 transition"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Burger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-xl text-gray-800 hover:text-yellow-600 transition"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-6 space-y-4 text-gray-800 font-medium bg-white/80 backdrop-blur-md">
          {links.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="block hover:text-yellow-700 transition"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
