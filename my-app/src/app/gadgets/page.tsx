"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AddItemModal from "@/components/modals/AddGadgetModal";
import Sidebar from "@/components/Sidebar";

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
    <div className="flex h-screen bg-white text-black">
      <div className="w-64 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Gadgets</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Gadget
          </button>
        </div>

        {/* Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-300 text-sm text-gray-700">
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
                  className="cursor-pointer hover:bg-gray-100 transition text-sm border-b border-gray-200 last:border-b-0"
                  onClick={() => handleRowClick(gadget)}
                >
                  <td className="px-4 py-2">{gadget.id}</td>
                  <td className="px-4 py-2">{gadget.name}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        gadget.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : gadget.status === "Faulty"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {gadget.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{gadget.station}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Gadget Modal */}
        <AddItemModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Add New Gadget"
          onSubmit={handleAddGadget}
          fields={[
            { name: "name", label: "Gadget Name", type: "text" },
            { name: "status", label: "Status", type: "text" },
            { name: "station", label: "Station", type: "text" },
          ]}
        />
      </div>
    </div>
  );
}
