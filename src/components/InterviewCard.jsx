import { useDispatch } from "react-redux";
import { deleteInterview } from "../store/interviewSlice";

const InterviewCard = ({ interview, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this interview?")) {
      dispatch(deleteInterview(interview.id));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {interview.candidateName}
          </h3>
          <p className="text-sm text-gray-500">
            with {interview.interviewerName}
          </p>
        </div>
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            interview.type === "Technical"
              ? "bg-blue-100 text-blue-800"
              : interview.type === "HR"
              ? "bg-green-100 text-green-800"
              : "bg-purple-100 text-purple-800"
          }`}
        >
          {interview.type}
        </span>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Date:</span> {interview.date}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Time:</span> {interview.time}
        </p>
      </div>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={() => onEdit(interview)}
          className="text-sm text-indigo-600 hover:text-indigo-900"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="text-sm text-red-600 hover:text-red-900"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default InterviewCard;