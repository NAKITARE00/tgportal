"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AddItemModal from "@/components/modals/AddGadgetModal";

export default function StationDetailsPage() {
  const [station, setStation] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();

  useEffect(() => {
    const saved = localStorage.getItem("selectedStation");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.id === Number(params.id)) {
        setStation(parsed);
      }
    }
  }, [params.id]);

  const handleUpdate = (updatedData: any) => {
    const updatedStation = { ...station, ...updatedData };
    setStation(updatedStation);
    localStorage.setItem("selectedStation", JSON.stringify(updatedStation));
    setIsModalOpen(false);
  };

  if (!station) {
    return (
      <div className="p-8 h-screen bg-gray-100 text-gray-700 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">
            Station Not Found
          </h2>
          <p className="text-sm">
            We couldn’t retrieve the station details. Try selecting it again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10 h-screen bg-gray-100 text-black text-sm">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-700">Station Details</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Update
          </button>
        </div>

        <div className="space-y-4 text-lg">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">ID:</span>
            <span>{station.id}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Name:</span>
            <span>{station.name}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Station Code:</span>
            <span>{station.station}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Location:</span>
            <span>{station.location}</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <AddItemModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Update Station"
          onSubmit={handleUpdate}
          fields={[
            { name: "name", label: "Station Name", type: "text" },
            { name: "station", label: "Station Code", type: "text" },
            { name: "location", label: "Location", type: "text" },
          ]}
        />
      )}
    </div>
  );
}
