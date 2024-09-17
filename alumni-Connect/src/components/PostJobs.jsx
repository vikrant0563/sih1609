import { useState } from 'react';

const PostJobs = () => {
  const [jobData, setJobData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    jobType: '',
    jobDescription: '',
    applicationLink: ''
  });

  const [message, setMessage] = useState('');

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value
    });
  };


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
     
    try {
      const response = await fetch('http://localhost:8001/jobs/post-job', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData)
      });
      const result = await response.json();
      if (response.ok) {
        setMessage(result.message);
        setJobData({
          jobTitle: '',
          companyName: '',
          location: '',
          jobType: '',
          jobDescription: '',
          applicationLink: ''
        });
      } else {
        setMessage(result.error);
      }
    } catch (error) {
      setMessage('Error posting job');
    }
   
  };

  return (
    <div className="max-w-lg mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Post a Job</h1>

      {message && <p className="mb-4 text-center text-green-600">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Job Title */}
        <div>
          <label className="block font-medium mb-2">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={jobData.jobTitle}
            onChange={handleChange}
            placeholder="Enter job title"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block font-medium mb-2">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={jobData.companyName}
            onChange={handleChange}
            placeholder="Enter company name"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleChange}
            placeholder="Enter location"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block font-medium mb-2">Job Type</label>
          <input
            type="text"
            name="jobType"
            value={jobData.jobType}
            onChange={handleChange}
            placeholder="Full-time, Part-time, Internship, etc."
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Job Description */}
        <div>
          <label className="block font-medium mb-2">Job Description</label>
          <textarea
            name="jobDescription"
            value={jobData.jobDescription}
            onChange={handleChange}
            placeholder="Enter job description"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            rows="5"
            required
          />
        </div>

        {/* Application Link */}
        <div>
          <label className="block font-medium mb-2">Application Link</label>
          <input
            type="url"
            name="applicationLink"
            value={jobData.applicationLink}
            onChange={handleChange}
            placeholder="Enter link to apply"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJobs;
