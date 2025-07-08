"use client";
import { useState } from "react";

interface AddStationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export default function AddStationModal({
  isOpen,
  onClose,
  onSubmit,
}: AddStationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    station: "",
    location: "",
    client_Id: "",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Add Station</h2>
        <input
          name="name"
          placeholder="Name"
          className="input"
          onChange={handleChange}
        />
        <input
          name="station"
          placeholder="Station"
          className="input"
          onChange={handleChange}
        />
        <input
          name="location"
          placeholder="Location"
          className="input"
          onChange={handleChange}
        />
        <input
          name="client_Id"
          placeholder="Client ID"
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
