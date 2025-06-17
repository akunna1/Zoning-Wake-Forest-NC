"use client";

import dynamic from "next/dynamic";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

// Dynamically import the client-only map component
const CMap = dynamic(() => import("@/app/components/cmap"), { ssr: false });

export default function MapPage() {
  return (
    <>
      <Navbar />
      <CMap />
      <Footer />
    </>
  );
}