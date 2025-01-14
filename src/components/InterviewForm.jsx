import { useState } from "react";
import { useDispatch } from "react-redux";
import { addInterview, updateInterview } from "../store/interviewSlice";

const InterviewForm = ({ existingInterview, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(
    existingInterview || {
      id: Date.now(),
      candidateName: "",
      interviewerName: "",
      date: "",
      time: "",
      type: "Technical",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingInterview) {
      dispatch(updateInterview(formData));
    } else {
      dispatch(addInterview(formData));
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Candidate Name
        </label>
        <input
          type="text"
          value={formData.candidateName}
          onChange={(e) =>
            setFormData({ ...formData, candidateName: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Interviewer Name
        </label>
        <input
          type="text"
          value={formData.interviewerName}
          onChange={(e) =>
            setFormData({ ...formData, interviewerName: e.target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Interview Type
        </label>
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option>Technical</option>
          <option>HR</option>
          <option>Behavioral</option>
        </select>
      </div>
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          {existingInterview ? "Update Interview" : "Schedule Interview"}
        </button>
      </div>
    </form>
  );
};
export default InterviewForm;
