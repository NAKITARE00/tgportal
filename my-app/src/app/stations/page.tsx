"use client";

import { useState } from "react";
import AddItemModal from "@/components/modals/AddGadgetModal";

export default function StationsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [stations, setStations] = useState([
    { id: 1, name: "Total", station: "Ruiru", location: "Ruiru" },
    { id: 2, name: "Rubis", station: "Muthiga", location: "Muthiga" },
    { id: 4, name: "Total", station: "Ruiru", location: "Ruiru" },
    { id: 5, name: "Rubis", station: "Muthiga", location: "Muthiga" },
    { id: 6, name: "Total", station: "Ruiru", location: "Ruiru" },
    { id: 7, name: "Rubis", station: "Muthiga", location: "Muthiga" },
  ]);

  const handleAddStation = (formData: any) => {
    setStations([...stations, { id: stations.length + 1, ...formData }]);
  };

  return (
    <div className="relative p-6 h-screen bg-white text-black shadow-md rounded-lg">
      {/* Header and Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Stations</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Station
        </button>
      </div>

      {/* Table Headings */}
      <div className="grid grid-cols-4 font-semibold bg-gray-300 px-4 py-2 rounded-t">
        <div>Id</div>
        <div>Name</div>
        <div>Station</div>
        <div>Location</div>
      </div>

      {/* Table Rows */}
      <div className="divide-y rounded-b">
        {stations.map((station) => (
          <div key={station.id} className="grid grid-cols-4 px-4 py-2">
            <div>{station.id}</div>
            <div>{station.name}</div>
            <div>{station.station}</div>
            <div>{station.location}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AddItemModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add New Station"
        onSubmit={handleAddStation}
        fields={[
          { name: "name", label: "Station Name" },
          { name: "station", label: "Station Code" },
          { name: "location", label: "Location" },
        ]}
      />
    </div>
  );
}
