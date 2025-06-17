"use client";

import "@/app/lib/fix-leaflet-icons";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

const ZONE_COLORS = [
  "#f87171", "#facc15", "#4ade80", "#60a5fa", "#c084fc",
  "#fbbf24", "#2dd4bf", "#fb923c", "#38bdf8", "#34d399",
  "#e879f9", "#f97316", "#a78bfa", "#22d3ee", "#f472b6",
  "#16a34a", "#fde68a", "#d946ef", "#0ea5e9", "#7c3aed",
  "#10b981", "#fcd34d", "#c026d3", "#0891b2", "#f43f5e",
  "#65a30d", "#eab308", "#9333ea", "#0284c7", "#db2777",
  "#14b8a6", "#ea580c", "#a3e635", "#e11d48", "#2563eb",
  "#9333ea", "#22c55e", "#facc15", "#7e22ce", "#06b6d4",
  "#dc2626", "#4f46e5", "#ec4899", "#059669", "#f59e0b",
  "#0d9488", "#c026d3", "#16a34a", "#ef4444", "#3b82f6",
  "#be123c", "#10b981"
];

const InteractiveMap = () => {
  const [geoData, setGeoData] = useState<any>(null);
  const [zoneMap, setZoneMap] = useState<{ [zone: string]: string }>({});

  useEffect(() => {
    fetch("/data/wake_forest_zoning.geojson")
      .then((res) => res.json())
      .then((data) => {
        setGeoData(data);
        const uniqueZones: string[] = Array.from(
          new Set<string>(data.features.map((f: any) => f.properties.ZONEDEFINE))
        );
        const zoneColorMap: { [zone: string]: string } = {};
        uniqueZones.forEach((zone, i) => {
          zoneColorMap[zone] = ZONE_COLORS[i % ZONE_COLORS.length];
        });
        setZoneMap(zoneColorMap);
      });
  }, []);

  const styleFeature = (feature: any) => {
    const zone = feature.properties.ZONEDEFINE;
    return {
      fillColor: zoneMap[zone] || "#ccc",
      weight: 1,
      opacity: 1,
      color: "#333",
      fillOpacity: 0.6,
    };
  };

  return (
    <main className="w-screen h-screen relative bg-white">
      <MapContainer
        center={[35.98, -78.52]}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {geoData && (
          <GeoJSON
            data={geoData}
            style={styleFeature}
            onEachFeature={(feature, layer) => {
              const props = feature.properties;
              layer.bindTooltip(`${props.ZONEDEFINE || "Unknown"}`, {
                sticky: true,
              });
            }}
          />
        )}
      </MapContainer>

      {/* Legend */}
      <div className="absolute top-6 right-6 bg-white/95 rounded-xl shadow-xl p-4 max-h-[80vh] overflow-y-auto w-64 border text-sm">
        <p className="text-base font-bold mb-2 text-blue-800">Zoning Names</p>
        <ul className="space-y-1">
          {Object.entries(zoneMap).map(([zone, color]) => (
            <li key={zone} className="flex items-center gap-2">
              <span
                className="inline-block w-4 h-4 rounded-sm border border-gray-300"
                style={{ backgroundColor: color }}
              />
              {zone}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default dynamic(() => Promise.resolve(InteractiveMap), { ssr: false });
