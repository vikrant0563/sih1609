import React from "react";
import jobimg from "../images/jobimg.jpg"
import { Link } from "react-router-dom";

function JobPortal() {
  return <div className="w-full h-screen flex justify-between p-8">
    <div className="flex justify-center items-center flex-col w-1/2 gap-y-10">
        <h3 className="text-6xl">
          <span className="text-blue-500 ">Unlock</span>
          Ambitions
        </h3>
        <div className="flex gap-x-4">
          <button className="btn btn-outline btn-success"><Link to="/find-jobs">Find Jobs</Link></button>
          <button className="btn btn-outline btn-primary"><Link to="/post-jobs">Post Jobs</Link></button>
        </div>
    </div>
  <div>
    <div>
      <img src={jobimg} alt="" />
    </div>
  </div>
  </div>;
}

export default JobPortal;
