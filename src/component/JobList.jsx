import React from 'react'
import jobs from '../data/jobs';
import JobCard from './JobCard';

const JobList = ({ search }) => {
    // Where it filters the jobs based on the search query, 
    // it checks if the job title starts with the search string (case-insensitive).
  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <div className="flex justify-center w-full px-4">
      <div className="grid grid-cols-3 gap-6 max-w-6xl">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-3">No jobs found</p>
        )}
      </div>
    </div>          
  )
}

export default JobList