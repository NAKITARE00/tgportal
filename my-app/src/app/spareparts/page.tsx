"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AddItemModal from "@/components/modals/AddSpareModal";
import Sidebar from "@/components/Sidebar";

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
    <div className="flex h-screen bg-white text-black">
      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Spare Parts</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Spare Part
          </button>
        </div>

        {/* Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-300 text-sm text-gray-700">
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
                  className="cursor-pointer hover:bg-gray-100 transition text-sm border-b border-gray-200 last:border-b-0"
                  onClick={() => handleRowClick(part)}
                >
                  <td className="px-4 py-2">{part.id}</td>
                  <td className="px-4 py-2">{part.name}</td>
                  <td className="px-4 py-2">
                    KES {part.cost.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        <AddItemModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Add New Spare Part"
          onSubmit={handleAddPart}
          fields={[
            { name: "name", label: "Part Name", type: "text" },
            { name: "cost", label: "Cost", type: "number" },
          ]}
        />
      </div>
    </div>
  );
}
