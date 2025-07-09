"use client";

import Image from "next/image";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex bg-gradient-to-br from-gray-100 to-white min-h-screen">
      <Sidebar />
      <main className="flex-1 flex items-center justify-center py-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8">
          {/* <Image
              src="/favicon.png"
              alt="AGRW Logo"
              width={200}
              height={200}
              className="object-cover"
            /> */}
        </div>
      </main>
    </div>
  );
}
