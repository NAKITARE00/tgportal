"use client";

import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex bg-gray-100">
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4 text-black">
          Welcome to AGRW Portal
        </h1>
        <p className="text-black">
          Select a section from the sidebar to begin.
        </p>
      </main>
    </div>
  );
}
