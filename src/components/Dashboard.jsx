import { useState } from "react";
import { useSelector } from "react-redux";
import InterviewCard from "./InterviewCard";
import InterviewForm from "./InterviewForm";
import FilterSection from "./FilterSection";

const Dashboard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedInterview, setSelectedInterview] = useState(null);
  const interviews = useSelector((state) => state.interviews.interviews);
  const filters = useSelector((state) => state.interviews.filters);

  const filteredInterviews = interviews.filter((interview) => {
    if (filters.date && interview.date !== filters.date) return false;
    if (
      filters.interviewer &&
      !interview.interviewerName
        .toLowerCase()
        .includes(filters.interviewer.toLowerCase())
    )
      return false;
    if (
      filters.candidate &&
      !interview.candidateName
        .toLowerCase()
        .includes(filters.candidate.toLowerCase())
    )
      return false;
    return true;
  });

  const handleEdit = (interview) => {
    setSelectedInterview(interview);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedInterview(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Interview Dashboard
        </h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Schedule New Interview
        </button>
      </div>

      <FilterSection />

      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">
              {selectedInterview ? "Edit Interview" : "Schedule New Interview"}
            </h2>
            <InterviewForm
              existingInterview={selectedInterview}
              onClose={handleCloseForm}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInterviews.map((interview) => (
          <InterviewCard
            key={interview.id}
            interview={interview}
            onEdit={handleEdit}
          />
        ))}
      </div>

      {filteredInterviews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No interviews found. Schedule one now!
          </p>
        </div>
      )}
    </div>
  );
};
export default Dashboard;
