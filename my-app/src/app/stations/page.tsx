"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AddItemModal from "@/components/modals/AddGadgetModal";
import Sidebar from "@/components/Sidebar";

export default function StationsPage() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [stations, setStations] = useState([
    { id: 1, name: "Total", station: "Ruiru", location: "Ruiru" },
    { id: 2, name: "Rubis", station: "Muthiga", location: "Muthiga" },
    { id: 3, name: "Shell", station: "Kasarani", location: "Nairobi" },
    { id: 5, name: "Total", station: "Ruiru", location: "Ruiru" },
    { id: 6, name: "Rubis", station: "Muthiga", location: "Muthiga" },
    { id: 7, name: "Shell", station: "Kasarani", location: "Nairobi" },
  ]);

  const handleAddStation = (formData: any) => {
    const newStation = {
      id: stations.length + 1,
      ...formData,
    };
    setStations([...stations, newStation]);
  };

  const handleRowClick = (station: any) => {
    localStorage.setItem("selectedStation", JSON.stringify(station));
    router.push(`/stations/${station.id}`);
  };

  return (
    <div className="flex h-screen bg-white text-black">
      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Stations</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Station
          </button>
        </div>

        {/* Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {/* Table Headings */}
          <div className="grid grid-cols-4 font-semibold bg-gray-300 px-4 py-2 text-sm text-gray-700">
            <div>ID</div>
            <div>Name</div>
            <div>Code</div>
            <div>Location</div>
          </div>

          {/* Data Rows */}
          <div className="text-sm">
            {stations.map((station, index) => (
              <div
                key={station.id}
                className={`grid grid-cols-4 px-4 py-2 cursor-pointer hover:bg-gray-100 transition ${
                  index !== stations.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
                onClick={() => handleRowClick(station)}
              >
                <div>{station.id}</div>
                <div>{station.name}</div>
                <div>{station.station}</div>
                <div>{station.location}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Station Modal */}
        <AddItemModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Add New Station"
          onSubmit={handleAddStation}
          fields={[
            { name: "name", label: "Station Name", type: "text" },
            { name: "station", label: "Station Code", type: "text" },
            { name: "location", label: "Location", type: "text" },
          ]}
        />
      </div>
    </div>
  );
}
