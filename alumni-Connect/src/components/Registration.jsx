import React,{useRef} from "react";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'
function Registration() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
      

      try {
        const formData = new FormData();
    // Append form fields to FormData
    formData.append("fullname", data.fullname);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("graduationYear", data.graduationYear);
      formData.append("fieldOfStudy", data.fieldOfStudy);
      formData.append("degree", data.degree);
      formData.append("currentJobTitle", data.currentJobTitle);
      formData.append("currentLocation", data.currentLocation);

      // Append file directly from the ref
      if (fileInputRef.current && fileInputRef.current.files[0]) {
        formData.append("profilePicture", fileInputRef.current.files[0]);
      }
        console.log(formData)
        const response = await fetch("http://localhost:8001/alumni/register", {
          method: "POST",
          body: formData, // send form data to backend
        });
  
        const result = await response.json();
        if (response.ok) {
          // If registration is successful, redirect to the login page or home page
          navigate('/');
          toast.success("registration successfully")
        } else {
          // Handle registration errors (e.g. user already exists, validation issues)
          toast.error("user already exists, validation issues")
          alert(result.message);
        }
      } catch (error) {
        console.error("Error registering user:", error);
      }
    };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 ">
      <form onSubmit={handleSubmit(onSubmit)}>
       <div className="mt-4 space-y-2">
        <span>Full Name</span>
        <br />
        <input type="text" 
        placeholder="Enter Your Name"
        className="w-80 px-3 py-1 border rounded"
         {...register("fullname",{required:true})}/>
         <br />
          {errors.name && <span className="text-sm text-red-500">This field is required</span>}
       </div>
       <div className="mt-4 space-y-2">
        <span>Email</span>
        <br />
        <input type="email" 
        placeholder="Enter Your Email here"
        className="w-80 px-3 py-1 border rounded"
        {...register("email",{required:true})}/>
       </div>
       <div className="mt-4 space-y-2">
        <span>Password</span>
        <br />
        <input type="password" 
        placeholder="Enter Your Password"
        className="w-80 px-3 py-1 border rounded" 
        {...register("password",{required:true})}/>
       </div>
       {/* <div className="mt-4 space-y-2">
        <span>Confirm Password</span>
        <br />
        <input type="password" 
        className="w-80 px-3 py-1 border rounded"/>
       </div> */}
       <div className="mt-4 space-y-2">
        <span>Graduation Year</span>
        <br />
        <input type="number" 
        placeholder="Enter Your Graduation Year"
        className="w-80 px-3 py-1 border rounded"
        {...register("graduationYear",{required:true})}/>
       </div>
       <div className="mt-4 space-y-2">
        <span>Field of Study</span>
        <br />
        <input type="text" 
        placeholder="Enter Your Field here"
        className="w-80 px-3 py-1 border rounded"
        {...register("fieldOfStudy",{required:true})}/>
       </div>
       <div className="mt-4 space-y-2">
        <span>Degree</span>
        <br />
        <input type="text" 
        placeholder="Enter Your Degree here"
        className="w-80 px-3 py-1 border rounded"
        {...register("degree",{required:true})}/>
       </div>
       <div className="mt-4 space-y-2">
        <span>Current Job Title</span>
        <br />
        <input type="text" 
        placeholder="Enter Your Job Title"
        className="w-80 px-3 py-1 border rounded"
        {...register("currentJobTitle",{required:true})}/>
       </div>
       <div className="mt-4 space-y-2">
        <span>Current Location</span>
        <br />
        <input type="text" 
        placeholder="Enter Your current location"
        className="w-80 px-3 py-1 border rounded"
        {...register("currentLocation",{required:true})}/>
       </div>
       <div className="mt-4 space-y-2">
            <span>Profile Picture</span>
            <br />
            <input
              type="file"
              className="w-80 px-3 py-1 border rounded"
              ref={fileInputRef}
              // {...register("profilePicture")}
            />
          </div>

       <button type="submit"  className="mt-4 btn btn-active btn-primary text-white w-28">Sign up</button>
    </form>
      </div>
    </div>
  );
}

export default Registration;
