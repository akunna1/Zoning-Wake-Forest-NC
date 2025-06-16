"use client";

import dynamic from "next/dynamic";

// Dynamically import the client-only map component
const CMap = dynamic(() => import("@/app/components/cmap"), { ssr: false });

export default function MapPage() {
  return <CMap />;
}
