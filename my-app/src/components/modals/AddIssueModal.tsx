"use client";
import { useState } from "react";
import Sidebar from "../Sidebar";

interface AddIssueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  title: string;
  fields: any[];
}

export default function AddIssueModal({
  isOpen,
  onClose,
  onSubmit,
  title,
  fields,
}: AddIssueModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    issue: "",
    gadget_Id: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Add Issue</h2>
        <input
          name="name"
          placeholder="Name"
          className="input"
          onChange={handleChange}
        />
        <input
          name="issue"
          placeholder="Issue Description"
          className="input"
          onChange={handleChange}
        />
        <input
          name="gadget_Id"
          placeholder="Gadget ID"
          className="input"
          onChange={handleChange}
        />
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
