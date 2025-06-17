"use client";

import { FaMapMarkedAlt, FaCode, FaHandsHelping } from "react-icons/fa";

export default function Cabout() {
  return (
    <main className="p-6 md:p-16 bg-gradient-to-br from-yellow-50 via-pink-50 to-sky-50 min-h-screen text-gray-800 font-sans">
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          About This Project
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I built this interactive tool to help residents and learners in Wake Forest, NC
          understand how zoning works and how it shapes the neighborhoods we live in.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {/* Why I built it */}
        <div className="bg-white bg-opacity-70 backdrop-blur-lg p-6 rounded-3xl shadow-2xl hover:shadow-pink-300 transform hover:scale-105 transition duration-300 border-t-4 border-pink-300">
          <div className="text-pink-500 text-3xl mb-4 flex justify-center">
            <FaHandsHelping />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-center">Why I Built This</h2>
          <p className="text-sm text-gray-700 text-center">
            Zoning often feels like a mystery, especially to people outside of urban planning. I wanted to break that down and give everyday people a clear way to explore, learn, and engage with how land use is decided in their town.
          </p>
        </div>

        {/* How I prepared the data */}
        <div className="bg-white bg-opacity-70 backdrop-blur-lg p-6 rounded-3xl shadow-2xl hover:shadow-indigo-300 transform hover:scale-105 transition duration-300 border-t-4 border-indigo-300">
          <div className="text-indigo-500 text-3xl mb-4 flex justify-center">
            <FaCode />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-center">How I Prepared the Data</h2>
          <p className="text-sm text-gray-700 text-center">
            I used zoning shapefiles provided by the town and analyzed the attribute table in R. I cleaned out unnecessary rows, explored the column data, and familiarized myself with the classifications. There were 52 unique zoning categories, so I color-coded each one for visual clarity using Tailwind CSS and Next.js.
          </p>
        </div>

        {/* How to use it */}
        <div className="bg-white bg-opacity-70 backdrop-blur-lg p-6 rounded-3xl shadow-2xl hover:shadow-green-300 transform hover:scale-105 transition duration-300 border-t-4 border-green-300">
          <div className="text-green-500 text-3xl mb-4 flex justify-center">
            <FaMapMarkedAlt />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-center">How You Can Use It</h2>
          <p className="text-sm text-gray-700 text-center">
            Explore the map, learn what each zoning class means, and use that insight to advocate for your neighborhood or deepen your understanding of local planning. This tool is for residents, students, and organizers—anyone who cares about how space is used.
          </p>
        </div>
      </section>
    </main>
  );
}
