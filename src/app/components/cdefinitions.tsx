"use client";

export default function Cdefinitions() {
const zones = [
  { name: "Open Space", desc: "Land reserved for parks, greenways, or nature.", icon: "🌳", color: "from-green-50 to-green-100" },
  { name: "General Residential 5, Conditional Use", desc: "Medium-density housing with special conditions.", icon: "🏠", color: "from-blue-50 to-blue-100" },
  { name: "General Residential 10, Conditional Use", desc: "Higher-density housing with conditions.", icon: "🏠", color: "from-blue-50 to-blue-100" },
  { name: "Residential Mixed-Use, Conditional District", desc: "Mixed housing and businesses with district rules.", icon: "🏙️", color: "from-yellow-50 to-yellow-100" },
  { name: "Highway Business", desc: "Commercial areas along highways.", icon: "🏢", color: "from-fuchsia-50 to-fuchsia-100" },
  { name: "Light Industrial, Conditional Use", desc: "Light industry with specific conditions.", icon: "🏭", color: "from-red-50 to-red-100" },
  { name: "Heavy Industrial", desc: "Areas for heavy industry and factories.", icon: "🏭", color: "from-red-50 to-red-100" },
  { name: "General Residential 5", desc: "Medium-density housing, ~5 units per acre.", icon: "🏠", color: "from-blue-50 to-blue-100" },
  { name: "General Residential 3, Conditional Use", desc: "Low-density housing with conditions.", icon: "🏠", color: "from-blue-50 to-blue-100" },
  { name: "General Residential 3", desc: "Low-density residential neighborhood.", icon: "🏠", color: "from-blue-50 to-blue-100" },
  { name: "General Residential 10, Conditional District", desc: "High-density housing with district rules.", icon: "🏠", color: "from-blue-50 to-blue-100" },
  { name: "Residential Mixed-Use Conditional District", desc: "Mixed housing and businesses with district rules.", icon: "🏙️", color: "from-yellow-50 to-yellow-100" },
  { name: "Neighborhood Business, Conditional Use", desc: "Small shops/services with conditions.", icon: "🏢", color: "from-fuchsia-50 to-fuchsia-100" },
  { name: "Highway Business, Conditional Use", desc: "Highway businesses with conditions.", icon: "🏢", color: "from-fuchsia-50 to-fuchsia-100" },
  { name: "General Residential 10", desc: "High-density housing, ~10 units per acre.", icon: "🏠", color: "from-blue-50 to-blue-100" },
  { name: "Neighborhood Business", desc: "Shops and services near homes.", icon: "🏢", color: "from-fuchsia-50 to-fuchsia-100" },
  { name: "Light Industrial", desc: "Low-impact manufacturing or warehousing.", icon: "🏭", color: "from-red-50 to-red-100" },
  { name: "Residential Mixed-Use", desc: "Housing combined with businesses.", icon: "🏙️", color: "from-yellow-50 to-yellow-100" },
  { name: "Residential Mixed-Use, Conditional Use", desc: "Residential mixed-use with conditions.", icon: "🏙️", color: "from-yellow-50 to-yellow-100" },
  { name: "Rural Holding District", desc: "Rural land reserved for future growth.", icon: "🌾", color: "from-green-50 to-green-100" },
  { name: "Urban Residential, Conditional Use", desc: "Urban housing with special conditions.", icon: "🏠", color: "from-blue-50 to-blue-100" },
  { name: "General Residential 3 (Planned Unit Development)", desc: "Planned low-density community.", icon: "🏘️", color: "from-blue-50 to-blue-100" },
  { name: "Neigborhood Business", desc: "Neighborhood shops/services.", icon: "🏢", color: "from-fuchsia-50 to-fuchsia-100" },
  { name: "Renaissance Area Historic Core", desc: "Historic core with preservation rules.", icon: "🏛️", color: "from-yellow-50 to-yellow-100" },
  { name: "Urban Residential, Conditional District", desc: "Urban housing with district rules.", icon: "🏠", color: "from-blue-50 to-blue-100" },
  { name: "Urban Residential", desc: "Dense urban housing.", icon: "🏠", color: "from-blue-50 to-blue-100" },
  { name: "Urban Mixed-Use", desc: "Urban area mixing homes and businesses.", icon: "🏙️", color: "from-yellow-50 to-yellow-100" },
  { name: "Neighborhood Mixed-Use", desc: "Local mixed housing/business area.", icon: "🏙️", color: "from-yellow-50 to-yellow-100" },
  { name: "General Residential 5 (Planned Unit Development)", desc: "Planned medium-density housing.", icon: "🏘️", color: "from-blue-50 to-blue-100" },
  { name: "Highway Business, Conditional District", desc: "Highway businesses with district rules.", icon: "🏢", color: "from-fuchsia-50 to-fuchsia-100" },
  { name: "Neighborhood Mixed Use, Conditional Use", desc: "Mixed neighborhood area with conditions.", icon: "🏙️", color: "from-yellow-50 to-yellow-100" },
  { name: "Urban Mixed-Use, Conditional Use", desc: "Urban mixed-use area with conditions.", icon: "🏙️", color: "from-yellow-50 to-yellow-100" },
  { name: "Neigborhood Business, Conditional District", desc: "Neighborhood shops with district rules.", icon: "🏢", color: "from-fuchsia-50 to-fuchsia-100" },
  { name: "Neigborhood Business, Conditional Use", desc: "Neighborhood shops with conditions.", icon: "🏢", color: "from-fuchsia-50 to-fuchsia-100" },
  { name: "Residential Mixed Use, Conditional District", desc: "Mixed housing/business with district rules.", icon: "🏙️", color: "from-yellow-50 to-yellow-100" },
  { name: "Open Space, Conditional Use", desc: "Protected open land with conditions.", icon: "🌳", color: "from-green-50 to-green-100" },
  { name: "Neighborhood Mixed Use, Conditional District", desc: "Mixed neighborhood with district rules.", icon: "🏙️", color: "from-yellow-50 to-yellow-100" },
  { name: "Neighborhood Mixed-Use, Conditional Use", desc: "Local mixed-use with conditions.", icon: "🏙️", color: "from-yellow-50 to-yellow-100" },
  { name: "Residential Mixed Use, Conditional Use", desc: "Housing/business mix with conditions.", icon: "🏙️", color: "from-yellow-50 to-yellow-100" },
  { name: "General Residential 3, Conditional District", desc: "Low-density housing with district rules.", icon: "🏠", color: "from-blue-50 to-blue-100" },
  { name: "Institutional Campus Development", desc: "Large schools, hospitals, or public campuses.", icon: "🏫", color: "from-teal-50 to-teal-100" },
  { name: "General Residential 5, Conditional District", desc: "Medium-density housing with district rules.", icon: "🏠", color: "from-blue-50 to-blue-100" },
  { name: "Open Space, Conditional District", desc: "Protected open land with district rules.", icon: "🌳", color: "from-green-50 to-green-100" },
  { name: "General Residential 10, Conditional District", desc: "High-density housing with district conditions.", icon: "🏠", color: "from-blue-50 to-blue-100" },
  { name: "RZ-19-05", desc: "Fifth rezoning request filed in 2019.", icon: "🗂️", color: "from-gray-50 to-gray-100" },
  { name: "Neighborhood Business, Conditional District", desc: "Neighborhood shops with district rules.", icon: "🏢", color: "from-fuchsia-50 to-fuchsia-100" },
  { name: "Neighborhood Mixed Use", desc: "Local mixed housing/business area.", icon: "🏙️", color: "from-yellow-50 to-yellow-100" },
  { name: "Rual Holding District", desc: "Rural land for future growth.", icon: "🌾", color: "from-green-50 to-green-100" },
  { name: "Rural Holding District, Conditional Use", desc: "Rural land with development conditions.", icon: "🌾", color: "from-green-50 to-green-100" },
  { name: "Planned Unit Development", desc: "Master-planned flexible community.", icon: "🏘️", color: "from-blue-50 to-blue-100" },
  { name: "Light Industrial, Conditional District", desc: "Light industry with district rules.", icon: "🏭", color: "from-red-50 to-red-100" },
  { name: "Neighborhood Mixed-Use, Conditional District", desc: "Neighborhood mixed-use with district rules.", icon: "🏙️", color: "from-yellow-50 to-yellow-100" }
];

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-yellow-50 via-pink-50 to-sky-50 p-8 font-sans text-gray-800">
      <div className="max-w-7xl w-full bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-2xl p-12 border border-gray-200 border-opacity-40">
        <h1 className="text-4xl font-extrabold mb-10 text-purple-700 text-center drop-shadow-md">
          Zoning Definitions
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {zones.map((zone, index) => (
            <div
              key={zone.name}
              className={`relative bg-gradient-to-br ${zone.color} border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1`}
            >
              <div className="absolute top-3 right-3 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-md">
                {index + 1}
              </div>
              <div className="text-4xl mb-2">{zone.icon}</div>
              <h2 className="text-xl font-bold text-gray-800 mb-1">{zone.name}</h2>
              <p className="text-gray-700">{zone.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
