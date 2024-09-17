import React, { useState, useEffect } from "react";
import AlumniCard from "./AlumniCard";

function AlumniDir() {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    // Fetch alumni data from the backend
    const fetchAlumni = async () => {
      try {
        const response = await fetch("http://localhost:8001/alumni");
        const data = await response.json();
        setAlumni(data);
      } catch (error) {
        console.error("Error fetching alumni data:", error);
      }
    };

    fetchAlumni();
  }, []);

  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="pd-5 w-4/6 mt-5 mb-5">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-success w-full"
        />
      </div>
      <div className="pd-5 w-4/6 flex flex-col gap-y-5 p-5">
        {alumni.map((alumnus) => (
          <AlumniCard key={alumnus._id} alumnus={alumnus} />
        ))}
      </div>
    </div>
  );
}

export default AlumniDir;
