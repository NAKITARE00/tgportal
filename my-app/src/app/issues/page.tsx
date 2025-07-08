"use client";

import { useState } from "react";
import AddItemModal from "@/components/modals/AddIssueModal";

export default function IssuesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [issues, setIssues] = useState([
    { id: 1, name: "POS Failure", issue: "Not turning on", gadget_id: 1 },
    { id: 2, name: "Sensor Fault", issue: "Reading errors", gadget_id: 2 },
    { id: 4, name: "POS Failure", issue: "Not turning on", gadget_id: 1 },
    { id: 5, name: "Sensor Fault", issue: "Reading errors", gadget_id: 2 },
    { id: 6, name: "POS Failure", issue: "Not turning on", gadget_id: 1 },
    { id: 7, name: "Sensor Fault", issue: "Reading errors", gadget_id: 2 },
  ]);

  const handleAddIssue = (formData: any) => {
    setIssues([...issues, { id: issues.length + 1, ...formData }]);
  };

  return (
    <div className="relative p-6 h-screen bg-white text-black shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Issues</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Issue
        </button>
      </div>

      <div className="grid grid-cols-4 font-semibold bg-gray-300 px-4 py-2 rounded-t">
        <div>Id</div>
        <div>Name</div>
        <div>Issue</div>
        <div>Gadget ID</div>
      </div>

      <div className="divide-y border border-gray-300 rounded-b">
        {issues.map((issue) => (
          <div key={issue.id} className="grid grid-cols-4 px-4 py-2">
            <div>{issue.id}</div>
            <div>{issue.name}</div>
            <div>{issue.issue}</div>
            <div>{issue.gadget_id}</div>
          </div>
        ))}
      </div>

      <AddItemModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add New Issue"
        onSubmit={handleAddIssue}
        fields={[
          { name: "name", label: "Issue Name" },
          { name: "issue", label: "Description" },
          { name: "gadget_id", label: "Gadget ID", type: "number" },
        ]}
      />
    </div>
  );
}
