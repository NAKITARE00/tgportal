"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AddItemModal from "@/components/modals/AddIssueModal";
import Sidebar from "@/components/Sidebar";

const mockIssues = [
  { id: 1, name: "POS Failure", issue: "Not turning on", gadget_id: 1 },
  { id: 2, name: "Sensor Fault", issue: "Reading errors", gadget_id: 2 },
  { id: 4, name: "POS Failure", issue: "Not turning on", gadget_id: 1 },
  { id: 5, name: "Sensor Fault", issue: "Reading errors", gadget_id: 2 },
  { id: 6, name: "POS Failure", issue: "Not turning on", gadget_id: 1 },
  { id: 7, name: "Sensor Fault", issue: "Reading errors", gadget_id: 2 },
];

export default function IssuesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [issues, setIssues] = useState(mockIssues);
  const router = useRouter();

  const handleAddIssue = (formData: any) => {
    const newIssue = {
      id: issues.length + 1,
      ...formData,
    };
    setIssues([...issues, newIssue]);
  };

  const handleRowClick = (issue: any) => {
    localStorage.setItem("selectedIssue", JSON.stringify(issue));
    router.push(`/issues/${issue.id}`);
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
          <h1 className="text-2xl font-bold">Issues</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Issue
          </button>
        </div>

        {/* Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-300 text-sm text-gray-700">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Gadget ID</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue) => (
                <tr
                  key={issue.id}
                  className="cursor-pointer hover:bg-gray-100 transition text-sm border-b border-gray-200 last:border-b-0"
                  onClick={() => handleRowClick(issue)}
                >
                  <td className="px-4 py-2">{issue.id}</td>
                  <td className="px-4 py-2">{issue.name}</td>
                  <td className="px-4 py-2">{issue.issue}</td>
                  <td className="px-4 py-2">{issue.gadget_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        <AddItemModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Add New Issue"
          onSubmit={handleAddIssue}
          fields={[
            { name: "name", label: "Issue Name", type: "text" },
            { name: "issue", label: "Description", type: "text" },
            { name: "gadget_id", label: "Gadget ID", type: "number" },
          ]}
        />
      </div>
    </div>
  );
}
