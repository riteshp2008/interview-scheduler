import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/interviewSlice";

const FilterSection = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.interviews.filters);

  const handleFilterChange = (key, value) => {
    dispatch(setFilter({ [key]: value }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            value={filters.date || ""}
            onChange={(e) => handleFilterChange("date", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Interviewer
          </label>
          <input
            type="text"
            value={filters.interviewer}
            onChange={(e) => handleFilterChange("interviewer", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Search by interviewer"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Candidate
          </label>
          <input
            type="text"
            value={filters.candidate}
            onChange={(e) => handleFilterChange("candidate", e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Search by candidate"
          />
        </div>
      </div>
    </div>
  );
};
export default FilterSection;
