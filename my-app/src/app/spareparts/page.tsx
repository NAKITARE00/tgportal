"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AddItemModal from "@/components/modals/AddSpareModal";

const mockParts = [
  { id: 1, name: "Printer Roll", cost: 500 },
  { id: 2, name: "Sensor Cable", cost: 1200 },
  { id: 3, name: "Thermal Head", cost: 2500 },
  { id: 4, name: "Motherboard", cost: 9000 },
  { id: 5, name: "Screen Panel", cost: 3000 },
];

export default function SparePartsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [parts, setParts] = useState(mockParts);
  const router = useRouter();

  const handleAddPart = (formData: any) => {
    const newPart = {
      id: parts.length + 1,
      ...formData,
    };
    setParts([...parts, newPart]);
  };

  const handleRowClick = (part: any) => {
    localStorage.setItem("selectedSparePart", JSON.stringify(part));
    router.push(`/spareparts/${part.id}`);
  };

  return (
    <div className="p-6 h-screen bg-white text-black shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Spare Parts</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Spare Part
        </button>
      </div>

      <table className="w-full text-left border border-gray-200 rounded overflow-hidden">
        <thead className="bg-gray-200 text-sm text-gray-700">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Cost (KES)</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part) => (
            <tr
              key={part.id}
              className="cursor-pointer hover:bg-gray-100 transition text-sm"
              onClick={() => handleRowClick(part)}
            >
              <td className="px-4 py-2">{part.id}</td>
              <td className="px-4 py-2">{part.name}</td>
              <td className="px-4 py-2">KES {part.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>

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
