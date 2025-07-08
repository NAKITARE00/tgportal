"use client";

import { useParams } from "next/navigation";

const mockGadgets = [
  { id: 1, name: "Router X", status: "Active", station: "Shell Westlands" },
  { id: 2, name: "POS Alpha", status: "Faulty", station: "Total Karen" },
  { id: 5, name: "Router X", status: "Active", station: "Shell Westlands" },
  { id: 6, name: "POS Alpha", status: "Faulty", station: "Total Karen" },
  { id: 7, name: "Router X", status: "Active", station: "Shell Westlands" },
  { id: 8, name: "POS Alpha", status: "Faulty", station: "Total Karen" },
];

export default function GadgetDetailsPage() {
  const { id } = useParams();
  const gadget = mockGadgets.find((g) => g.id === Number(id));

  if (!gadget) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold">Gadget Not Found</h1>
        <p>No gadget with ID {id} exists.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white h-screen text-black">
      <h1 className="text-2xl font-bold mb-4">Gadget Details (ID: {id})</h1>
      <div className="space-y-2">
        <p>
          <strong>Name:</strong> {gadget.name}
        </p>
        <p>
          <strong>Status:</strong> {gadget.status}
        </p>
        <p>
          <strong>Station:</strong> {gadget.station}
        </p>
      </div>
    </div>
  );
}
