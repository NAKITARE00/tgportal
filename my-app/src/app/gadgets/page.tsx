"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AddItemModal from "@/components/modals/AddGadgetModal";

const mockGadgets = [
  { id: 1, name: "Router X", status: "Active", station: "Shell Westlands" },
  { id: 2, name: "POS Alpha", status: "Faulty", station: "Total Karen" },
  { id: 3, name: "Scanner Pro", status: "Inactive", station: "Oil Libya" },
  { id: 4, name: "Router X", status: "Active", station: "Shell Westlands" },
  { id: 5, name: "POS Alpha", status: "Faulty", station: "Total Karen" },
  { id: 6, name: "Scanner Pro", status: "Inactive", station: "Oil Libya" },
];

export default function GadgetsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gadgets, setGadgets] = useState(mockGadgets);
  const router = useRouter();

  const handleAddGadget = (formData: any) => {
    const newGadget = {
      id: gadgets.length + 1,
      ...formData,
    };
    setGadgets([...gadgets, newGadget]);
  };

  const handleRowClick = (gadget: any) => {
    localStorage.setItem("selectedGadget", JSON.stringify(gadget));
    router.push(`/gadgets/${gadget.id}`);
  };

  return (
    <div className="p-6 h-screen bg-white text-black shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gadgets</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Gadget
        </button>
      </div>

      <table className="w-full text-left border border-gray-200 rounded overflow-hidden">
        <thead className="bg-gray-200 text-sm text-gray-700">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Station</th>
          </tr>
        </thead>
        <tbody>
          {gadgets.map((gadget) => (
            <tr
              key={gadget.id}
              className="cursor-pointer hover:bg-gray-100 transition text-sm"
              onClick={() => handleRowClick(gadget)}
            >
              <td className="px-4 py-2">{gadget.id}</td>
              <td className="px-4 py-2">{gadget.name}</td>
              <td className="px-4 py-2">{gadget.status}</td>
              <td className="px-4 py-2">{gadget.station}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <AddItemModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Gadget"
          onSubmit={handleAddGadget}
          fields={[
            { name: "name", label: "Gadget Name" },
            { name: "status", label: "Status" },
            { name: "station", label: "Station" },
          ]}
        />
      )}
    </div>
  );
}
