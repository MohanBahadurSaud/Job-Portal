import React from 'react'
import { createPortal } from 'react-dom'

const JobDetailsModal = ({ job, onClose }) => {
  const modal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white p-6 rounded-lg shadow-lg w-140 max-w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">{job.title}</h2>
        <p className="text-gray-600 text-sm mr-2 ml-1">{job.company}</p>
        <p className="text-gray-500 text-sm mt-2">
          <span className="mr-1">📌</span>
          {job.location}
        </p>
         <p className="text-gray-700 mt-2">{job.description}</p>
        <div className="w-24 flex items-center justify-center bg-[#E0F2FE] text-sm text-[#0369A1] pl-1 pr-1 mt-4 mb-4 rounded-lg">
          {job.type}
        </div>

       <span className='text-gray-600 text-sm'>Skill</span>
        <div className="mt-1">
          {job.skills.map((skill, index) => (
            <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 mr-2">Close</button>
          <button onClick={() => alert("✅ Application submitted successfully!")} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Apply</button>
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}

export default JobDetailsModal