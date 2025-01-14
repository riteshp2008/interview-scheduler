import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { deleteInterview } from "../store/interviewsSlice";
import { addNotification } from "../store/notificationsSlice";

const InterviewDetails = ({ interview, onClose }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/edit/${interview.id}`);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this interview?")) {
      dispatch(deleteInterview(interview.id));
      dispatch(
        addNotification({
          message: "Interview deleted successfully",
          type: "success",
        })
      );
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Interview Details
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">
              <strong>Candidate:</strong> {interview.candidateName}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Interviewer:</strong> {interview.interviewerName}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Date & Time:</strong>{" "}
              {moment(interview.dateTime).format("MMMM Do YYYY, h:mm a")}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Type:</strong> {interview.type}
            </p>
            {interview.notes && (
              <p className="text-sm text-gray-500">
                <strong>Notes:</strong> {interview.notes}
              </p>
            )}
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-2"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 mb-2"
            >
              Delete
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewDetails;
