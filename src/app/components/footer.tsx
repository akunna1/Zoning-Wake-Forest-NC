"use client";

import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        bg-gradient-to-br from-pink-50 via-yellow-50 to-sky-100
        bg-opacity-30
        backdrop-blur-md
        border border-yellow-300 border-opacity-40
        shadow-lg
        rounded-t-3xl
        py-6 px-4 md:px-12
        text-gray-900
        select-none
      "
      style={{
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Company & copyright */}
        <div className="text-center md:text-left text-sm">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://akunnatechstudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline transition"
            >
              Akunna Tech Studio
            </a>
            . All rights reserved.
          </p>
          <p className="mt-1 italic text-yellow-700 text-xs">
           Department of City and Regional Planning
          </p>
        </div>

        {/* Right: Social media links */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://www.linkedin.com/in/akunna1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-600 transition-transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/akunna1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-600 transition-transform hover:scale-125"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
