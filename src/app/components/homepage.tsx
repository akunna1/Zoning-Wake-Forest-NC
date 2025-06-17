"use client";

import Link from "next/link";
import { FaMap, FaInfoCircle, FaListUl, FaChartBar } from "react-icons/fa";

export default function Homepage() {
  return (
    <main className="bg-gradient-to-br from-pink-50 via-yellow-50 to-sky-100 min-h-screen p-6 md:p-12 text-gray-900 font-sans">
      {/* Hero */}
      <section className="text-center space-y-4 max-w-4xl mx-auto mb-20">
        <p className="text-5xl font-extrabold drop-shadow-md tracking-tight neon-outline text-black">
          Understanding Zoning in Wake Forest, NC
        </p>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto drop-shadow-sm">
          Zoning determines how land in a city or town can be used—whether for homes, businesses,
          factories, or parks. This educational tool helps residents understand the system shaping their neighborhoods.
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Link
            href="/map"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition"
          >
            View Interactive Map
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-400 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Zoning Categories */}
      <section className="space-y-10 mb-28">
        <p className="text-3xl font-bold text-center">
          Zoning Categories Explained
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Residential",
              color: "from-rose-200 to-pink-300",
              icon: "🏡",
              description: "Areas for housing: single-family homes, duplexes, and apartments.",
            },
            {
              title: "Commercial",
              color: "from-lime-200 to-emerald-300",
              icon: "🏬",
              description: "Zones for shops, offices, restaurants, and local businesses.",
            },
            {
              title: "Industrial",
              color: "from-yellow-200 to-orange-300",
              icon: "🏭",
              description: "Spaces for manufacturing, warehousing, and large-scale facilities.",
            },
          ].map(({ title, color, icon, description }) => (
            <div
              key={title}
              tabIndex={0}
              aria-label={`${title} zoning category`}
              className={`bg-gradient-to-br ${color} text-gray-900 p-6 rounded-3xl shadow-lg transform transition hover:scale-105 hover:shadow-2xl cursor-pointer select-none focus:outline-none focus:ring-4 focus:ring-yellow-400`}
            >
              <div className="text-4xl mb-3 flex justify-center">{icon}</div>
              <p className="text-xl font-semibold mb-2 flex justify-center text-center">{title} Zones</p>
              <p className="text-sm flex justify-center text-center">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Table of Contents */}
      <section className="space-y-6 max-w-4xl mx-auto">
        <p className="text-3xl font-bold text-center">
          Site Contents
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <FaMap className="text-indigo-600 text-xl" />,
              title: "Interactive Zoning Map",
              href: "/map",
              desc: "Explore a live, color-coded zoning map of Wake Forest. Click zones to see their rules and examples.",
              bg: "from-indigo-50 to-blue-100",
            },
            {
              icon: <FaListUl className="text-green-600 text-xl" />,
              title: "Zoning Class Definitions",
              href: "/definitions",
              desc: "Understand what each zoning class (like GR3 or RMX) allows—uses, rules, and building examples.",
              bg: "from-lime-50 to-green-100",
            },
            {
              icon: <FaChartBar className="text-yellow-600 text-xl" />,
              title: "Visual Analysis",
              href: "/analysis",
              desc: "View data visualizations like pie charts, bar graphs, and R-powered insights from Wake Forest zoning data.",
              bg: "from-yellow-50 to-orange-100",
            },
            {
              icon: <FaInfoCircle className="text-purple-600 text-xl" />,
              title: "About This Project",
              href: "/about",
              desc: "Learn why this resource was created, how the data was prepared, and how you can use it for advocacy or learning.",
              bg: "from-purple-50 to-fuchsia-100",
            },
          ].map(({ icon, title, href, desc, bg }) => (
            <Link
              key={href}
              href={href}
              className={`bg-gradient-to-br ${bg} p-5 rounded-2xl border border-white hover:shadow-xl hover:scale-105 transition space-y-2`}
            >
              <div className="flex items-center gap-2 font-semibold text-lg">{icon} {title}</div>
              <p className="text-sm text-gray-800">{desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
