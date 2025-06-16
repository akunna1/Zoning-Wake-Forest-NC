"use client"

import Link from "next/link";
import { FaMap, FaInfoCircle, FaListUl, FaChartBar } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-white via-sky-50 to-blue-100 min-h-screen p-6 md:p-12 text-gray-900">
      {/* Hero */}
      <section className="text-center space-y-4 max-w-4xl mx-auto mb-20">
        <p className="text-5xl font-extrabold text-blue-900 drop-shadow-md tracking-tight">
          Understanding Zoning in Wake Forest, NC
        </p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto drop-shadow-sm">
          Zoning determines how land in a city or town can be used—whether for homes, businesses,
          factories, or parks. This educational tool helps residents understand the system
          shaping their neighborhoods.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/map"
            className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-800 transition"
          >
            View Interactive Map
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-white text-blue-700 border border-blue-700 font-semibold rounded-xl shadow hover:bg-blue-50 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* 3D Zoning Types Section */}
      <section className="space-y-8 mb-24">
        <p className="text-3xl font-bold text-center text-blue-800 mb-6 drop-shadow">
          Zoning Categories Explained
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Residential",
              color: "from-blue-100 to-blue-300",
              text: "Areas for housing: single-family homes, duplexes, and apartments.",
            },
            {
              title: "Commercial",
              color: "from-green-100 to-green-300",
              text: "Zones for shops, offices, restaurants, and local businesses.",
            },
            {
              title: "Industrial",
              color: "from-yellow-100 to-yellow-300",
              text: "Spaces for manufacturing, warehousing, and large-scale facilities.",
            },
          ].map(({ title, color, text }) => (
            <div
              key={title}
              className={`bg-gradient-to-br ${color} p-6 rounded-3xl shadow-xl transform transition hover:scale-105 hover:shadow-2xl`}
            >
              <p className="text-xl font-semibold text-gray-800 mb-2">{title} Zones</p>
              <p className="text-gray-700 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Table of Contents */}
      <section className="space-y-6">
        <p className="text-3xl font-bold text-blue-800 text-center mb-6">Site Contents</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: <FaMap className="text-blue-600 text-xl" />,
              title: "Interactive Zoning Map",
              href: "/interactive-map",
              desc: "Explore a live, color-coded zoning map of Wake Forest. Click zones to see their rules and examples.",
            },
            {
              icon: <FaListUl className="text-green-600 text-xl" />,
              title: "Zoning Class Definitions",
              href: "/zoning-definitions",
              desc: "Understand what each zoning class (like GR3 or RMX) allows—uses, rules, and building examples.",
            },
            {
              icon: <FaChartBar className="text-yellow-600 text-xl" />,
              title: "Visual Analysis",
              href: "/charts-analysis",
              desc: "View data visualizations like pie charts, bar graphs, and R-powered insights from Wake Forest zoning data.",
            },
            {
              icon: <FaInfoCircle className="text-purple-600 text-xl" />,
              title: "About This Project",
              href: "/about",
              desc: "Learn why this resource was created, how the data was prepared, and how you can use it for advocacy or learning.",
            },
          ].map(({ icon, title, href, desc }) => (
            <Link
              key={href}
              href={href}
              className="bg-white p-5 rounded-2xl border hover:shadow-md hover:scale-[1.01] transition space-y-2"
            >
              <div className="flex items-center gap-2 font-semibold text-lg">{icon} {title}</div>
              <p className="text-sm text-gray-700">{desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
