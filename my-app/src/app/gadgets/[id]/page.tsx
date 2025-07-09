"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AddItemModal from "@/components/modals/AddGadgetModal";

export default function GadgetDetailsPage() {
  const [gadget, setGadget] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const params = useParams();

  useEffect(() => {
    const saved = localStorage.getItem("selectedGadget");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.id === Number(params.id)) {
        setGadget(parsed);
      }
    }
  }, [params.id]);

  const handleUpdate = (updatedData: any) => {
    const updatedGadget = { ...gadget, ...updatedData };
    setGadget(updatedGadget);
    localStorage.setItem("selectedGadget", JSON.stringify(updatedGadget));
    setIsModalOpen(false);
  };

  if (!gadget) {
    return (
      <div className="p-8 h-screen bg-gray-100 text-gray-700 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">
            Gadget Not Found
          </h2>
          <p className="text-sm">
            We couldn’t retrieve the gadget details. Try selecting it again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10 h-screen bg-gray-100 text-black text-sm">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-700">Gadget Details</h1>
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
            <span>{gadget.id}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Name:</span>
            <span>{gadget.name}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium">Status:</span>
            <span
              className={`px-2 py-1 rounded text-white ${
                gadget.status === "Active"
                  ? "bg-green-600"
                  : gadget.status === "Faulty"
                  ? "bg-red-600"
                  : "bg-yellow-500"
              }`}
            >
              {gadget.status}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Station:</span>
            <span>{gadget.station}</span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <AddItemModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Update Gadget"
          onSubmit={handleUpdate}
          fields={[
            { name: "name", label: "Gadget Name", type: "text" },
            { name: "status", label: "Status", type: "text" },
            { name: "station", label: "Station", type: "text" },
          ]}
        />
      )}
    </div>
  );
}
