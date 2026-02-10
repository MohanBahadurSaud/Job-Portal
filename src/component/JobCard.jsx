import React, { useState } from "react";
import JobDetailsModal from "./JobDetailsModal";

const JobCard = ({ job }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-90 h-62.5 bg-white p-4 rounded-lg shadow-lg mb-4 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
      <h2 className="text-xl font-semibold text-gray-800 mb-1">{job.title}</h2>
      <p className="text-gray-600 text-sm mr-2 ml-1">{job.company}</p>
      <p className="text-gray-500 text-sm mt-2">
        <span className="mr-1">📌</span>
        {job.location}
      </p>
      <div
        className="w-24 flex items-center justify-center bg-[#E0F2FE] text-sm text-[#0369A1] 
      pl-1 pr-1 mt-8 mb-8 rounded-lg"
      >
        {job.type}
      </div>

      {/* <p className="text-gray-700 mt-2">{job.description}</p>
      <div className="mt-3">
        {job.skills.map((skill, index) => (
          <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
            {skill}
          </span>
        ))}
      </div> */}
      <div className="mt-4 flex justify-end">
        <button
          className="w-full cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => setOpen(true)}
        >
          View Details
        </button>
      </div>

      {open && (
        <JobDetailsModal job={job} onClose={() => setOpen(false)} />
      )}
    </div>
  );
};

export default JobCard;
