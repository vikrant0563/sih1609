import React from "react";

function AlumniCard({ alumnus }) {
  const profilePictureUrl = alumnus.profilePicture
    ? `http://localhost:8001${alumnus.profilePicture}`
    : 'default-profile-picture.png';

  return (
    <div className="p-4 lg:p-8">
      <div className="card lg:card-side bg-white shadow-lg rounded-lg overflow-hidden">
        <figure className="w-full lg:w-1/2">
          <img
            src={profilePictureUrl}
            alt={`${alumnus.fullname}'s profile`}
            className="object-cover w-full h-48 lg:h-full"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-2xl lg:text-4xl font-bold text-center border-b-2 lg:border-b-4 pb-2 lg:pb-4 mb-4 lg:mb-6">
            {alumnus.fullname}
          </h2>
          <div className="mb-2">
            <p className="text-gray-700 text-lg">{alumnus.email}</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-700 text-lg">{alumnus.currentJobTitle}</p>
          </div>
          <div className="mb-2">
            <p className="text-gray-700 text-lg">{alumnus.currentLocation}</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-500 text-sm">Company: Google</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlumniCard;
