import React from "react";

function DonateCard({ alumnus }) {
    const profilePictureUrl = alumnus.profilePicture
    ? `http://localhost:8001${alumnus.profilePicture}`
    : 'default-profile-picture.png';
  console.log(profilePictureUrl)
  return (
    // <div className="p-4 lg:p-8">
    //   <div className="card lg:card-side bg-white shadow-lg rounded-lg overflow-hidden">
    //     <figure className="w-full lg:w-1/2">
    //       <img
    //         src={'http://localhost:8001/uploads/1726508156326-b651c3c6-77e2-4f0b-ba97-648c7f33b2e8.png'}
    //         alt={`${alumnus.fullname}'s profile`}
    //         className="object-cover w-full h-48 lg:h-full"
    //       />
    //     </figure>
    //   </div>
    // </div>
    <div className="h-full w-full"> 
        <img src={profilePictureUrl} alt="" />
    </div>
  );
}

export default DonateCard;
