"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function Canalysis() {
  const uniqueDefinitions = [
    "Open Space",
    "General Residential 5, Conditional Use",
    "General Residential 10, Conditional Use",
    "Residential Mixed-Use, Conditional District",
    "Highway Business",
    "Light Industrial, Conditional Use",
    "Heavy Industrial",
    "General Residential 5",
    "General Residential 3, Conditional Use",
    "General Residential 3",
    "General Residential  10, Conditional District",
    "Residential Mixed-Use Conditional District",
    "Neighborhood Business, Conditional Use",
    "Highway Business, Conditional Use",
    "General Residential 10",
    "Neighborhood Business",
    "Light Industrial",
    "Residential Mixed-Use",
    "Residential Mixed-Use, Conditional Use",
    "Rural Holding District",
    "Urban Residential, Conditional Use",
    "General Residential 3 (Planned Unit Development)",
    "Neigborhood Business",
    "Renaissance Area Historic Core",
    "Urban Residential, Conditional District",
    "Urban Residential",
    "Urban Mixed-Use",
    "Neighborhood Mixed-Use",
    "General Residential 5 (Planned Unit Development)",
    "Highway Business, Conditional District",
    "Neighborhood Mixed Use, Conditional Use",
    "Urban Mixed-Use, Conditional Use",
    "Neigborhood Business, Conditional District",
    "Neigborhood Business, Conditional Use",
    "Residential Mixed Use, Conditional District",
    "Open Space, Conditional Use",
    "Neighborhood Mixed Use, Conditional District",
    "Neighborhood Mixed-Use, Conditional Use",
    "Residential Mixed Use, Conditional Use",
    "General Residential 3, Conditional District",
    "Institutional Campus Development",
    "General Residential 5, Conditional District",
    "Open Space, Conditional District",
    "General Residential 10, Conditional District",
    "RZ-19-05",
    "Neighborhood Business, Conditional District",
    "Neighborhood Mixed Use",
    "Rual Holding District",
    "Rural Holding District, Conditional Use",
    "Planned Unit Development",
    "Light Industrial, Conditional District",
    "Neighborhood Mixed-Use, Conditional District",
  ];

  const [showAll, setShowAll] = useState(false);
  const definitionsToShow = showAll ? uniqueDefinitions : uniqueDefinitions.slice(0, 10);

  return (
    <main className="min-h-screen bg-gradient-to-tr from-sky-100 via-yellow-50 to-pink-100 py-16 px-6 md:px-20 font-sans">
      <div className="max-w-5xl mx-auto bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-2xl p-12 border border-pink-300 border-opacity-40">
        <h2 className="text-5xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 drop-shadow-md animate-fadeIn">
          About R Analysis
        </h2>

        <p className="mb-8 text-lg leading-relaxed text-gray-800 max-w-3xl mx-auto animate-fadeIn delay-100">
          I downloaded the zoning shapefile from{" "}
          <a
            href="https://data.raleighnc.gov/datasets/264e7d4dd1c64e7c8ad88e7aac65613a_25/explore?location=35.958449%2C-78.529197%2C11.78"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 underline hover:text-purple-900 transition"
          >
            Raleigh Open Data Portal
          </a>.
        </p>

        <p className="mb-8 text-lg leading-relaxed text-gray-800 max-w-3xl mx-auto animate-fadeIn delay-200">
          Using R, I cleaned and explored the attribute table of the shapefile to understand the zoning classifications and prepare the data for visualization.
        </p>

        <p className="mb-8 text-lg leading-relaxed text-gray-800 max-w-3xl mx-auto animate-fadeIn delay-300">
          Afterward, I exported the cleaned data as a GeoJSON file, saved it in the Next.js public directory so the frontend can load and display it dynamically with Leaflet.js.
        </p>

        <section className="mb-10 max-w-4xl mx-auto animate-fadeIn delay-400">
          <h3 className="text-2xl font-semibold mb-4 text-center text-purple-700">
            Zone Names
          </h3>
          <div className="overflow-y-auto max-h-72 border border-purple-200 rounded-xl bg-purple-50 p-6 shadow-inner">
            <ol className="list-decimal list-inside space-y-1 text-gray-700 font-mono">
              {definitionsToShow.map((def, i) => (
                <li
                  key={i}
                  className="hover:bg-purple-200 rounded px-2 py-1 cursor-default transition-colors duration-200"
                  title={def}
                >
                  {def}
                </li>
              ))}
            </ol>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-purple-700 font-semibold hover:text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded transition"
              aria-expanded={showAll}
              aria-controls="zoning-definitions-list"
            >
              {showAll ? "Show Less ▲" : `Show All ${uniqueDefinitions.length} ▼`}
            </button>
          </div>
        </section>

        <div className="flex justify-center animate-fadeIn delay-500">
          <a
            href="https://github.com/akunna1/Zoning-Wake-Forest-NC-R-Analysis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-xl font-semibold shadow-lg text-white transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-400 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800"
            aria-label="View R Analysis GitHub Repository"
          >
            <FaGithub size={20} /> View Code
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
        .animate-fadeIn.delay-100 {
          animation-delay: 0.1s;
        }
        .animate-fadeIn.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fadeIn.delay-300 {
          animation-delay: 0.3s;
        }
        .animate-fadeIn.delay-400 {
          animation-delay: 0.4s;
        }
        .animate-fadeIn.delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </main>
  );
}
