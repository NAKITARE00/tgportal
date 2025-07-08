"use client";

import { useState } from "react";
import AddItemModal from "@/components/modals/AddSpareModal";

export default function SparePartsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [parts, setParts] = useState([
    { id: 1, name: "Printer Roll", cost: 500 },
    { id: 2, name: "Sensor Cable", cost: 1200 },
    { id: 4, name: "Printer Roll", cost: 500 },
    { id: 5, name: "Sensor Cable", cost: 1200 },
    { id: 6, name: "Printer Roll", cost: 500 },
    { id: 7, name: "Sensor Cable", cost: 1200 },
  ]);

  const handleAddPart = (formData: any) => {
    setParts([...parts, { id: parts.length + 1, ...formData }]);
  };

  return (
    <div className="relative p-6 h-screen bg-white text-black shadow-md rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Spare Parts</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Spare Part
        </button>
      </div>

      {/* Column Headers */}
      <div className="grid grid-cols-3 font-semibold bg-gray-300 px-4 py-2 rounded-t">
        <div>Id</div>
        <div>Name</div>
        <div>Cost (KES)</div>
      </div>

      {/* Data Rows */}
      <div className="divide-y border border-gray-300 rounded-b">
        {parts.map((part) => (
          <div key={part.id} className="grid grid-cols-3 px-4 py-2">
            <div>{part.id}</div>
            <div>{part.name}</div>
            <div>{part.cost}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AddItemModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add New Spare Part"
        onSubmit={handleAddPart}
        fields={[
          { name: "name", label: "Part Name" },
          { name: "cost", label: "Cost", type: "number" },
        ]}
      />
    </div>
  );
}
