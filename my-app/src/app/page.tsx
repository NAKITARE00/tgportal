"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex bg-gradient-to-br from-gray-100 to-white min-h-screen">
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="bg-white shadow-2xl rounded-xl p-10 max-w-2xl w-full text-center border border-blue-100">
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/favicon.png"
              alt="AGRW Logo"
              width={200}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
