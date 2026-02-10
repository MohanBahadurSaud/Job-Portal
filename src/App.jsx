import { useState } from 'react'
import JobList from './component/JobList';
import SearchIcon from './assets/search-icon.svg';

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="w-360 h-screen flex items-center flex-col bg-[#F9FAFB] px-6 py-8 mb-5">
      {/* Page Title */}
      <h1 className="text-[32px] font-semibold text-black mb-6">
        Available Jobs
      </h1>

      {/* Search Bar */}
      <div className="relative w-sm  mb-8 rounded-lg">
        {/* Search Icon */}
        <img 
          src={SearchIcon} 
          alt="search" 
          className="absolute inset-y-0 mt-3 left-3 flex items-center w-5 h-5 opacity-60"
        />

        {/* Input */}
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full h-11 pl-10 pr-4 rounded-lg border border-gray-300 
                     focus:outline-none focus:ring-2 focus:ring-blue-500
                     focus:border-blue-500 bg-white text-gray-900 shadow-md"
        />
      </div>

      {/* display container */}
      <div className="w-full flex items-center flex-row justify-center pt-0 pb-0 px-4">
        {/* Job List */}
        <JobList search={search} />
      </div>

    </div>
    </>
  )
}

export default App
