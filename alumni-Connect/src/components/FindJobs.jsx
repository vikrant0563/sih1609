import React from 'react'
import { useState,useEffect } from 'react';
import { dummyData } from '../data';
import toast from 'react-hot-toast';


function FindJobs() {
  
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const token = localStorage.getItem('accessToken');
  // Fetch jobs from the backend API
  useEffect(() => {
    
    if (!token) {
      // Redirect to login page if not logged in
      toast.error("user not logged in")
      document.getElementById('my_modal_3').showModal();
     
    }
    const fetchAlumni = async () => {
      try {
        const response = await fetch("http://localhost:8001/jobs");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching alumni data:", error);
      }
    };

    fetchAlumni();
    
  }, [token]);

  const filteredJobs = jobs.filter((job) => {
    return (
      job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.jobType.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className='flex flex-col justify-center items-center'>
    <div className="job-listings w-9/12">
    <input
          type="text"
          placeholder="Search by job title, company, or role"
          className="w-full p-3 mt-5 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}  // Update search term
        />
    <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job._id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Company Logo */}
              {/* <img
                src={job.companyLogo}
                alt={`${job.companyName} logo`}
                className="w-20 h-20 mb-4 mx-auto"
              /> */}
              <h2 className="text-xl font-semibold mb-2 text-center">
                {job.jobTitle}
              </h2>
              <p className="text-gray-600 text-center">
                <strong>Company:</strong> {job.companyName}
              </p>
              <p className="text-gray-600 text-center">
                <strong>Location:</strong> {job.location}
              </p>
              <p className="text-gray-600 text-center">
                <strong>Role:</strong> {job.jobType}
              </p>

              {/* Apply Now Link */}
              <a
                href={job.applicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 bg-blue-500 text-white py-2 px-4 rounded text-center hover:bg-blue-600"
              >
                Apply Now
              </a>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No jobs found for your search.
          </p>
        )}
      </div>
  </div>
  </div>
  )
}

export default FindJobs


// const cardStyle = {
//   border: '1px solid #ccc',
//   padding: '16px',
//   margin: '16px',
//   borderRadius: '8px',
//   backgroundColor: '#f9f9f9',
//   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
// };

// const linkStyle = {
//   display: 'inline-block',
//   marginTop: '12px',
//   padding: '8px 16px',
//   backgroundColor: '#007bff',
//   color: '#fff',
//   textDecoration: 'none',
//   borderRadius: '4px'
// };

// const logoStyle = {
//   width: '100px',   // Adjust the size of the logo as needed
//   height: 'auto',
//   marginBottom: '16px'  // Spacing between logo and job title
// };