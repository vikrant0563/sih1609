import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function SignIn() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();
  
  const closeModal = () => {
    setIsModalOpen(false); // Function to close modal
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to handle form submission
  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await fetch('http://localhost:8001/alumni/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        // If login is successful, navigate to the homepage or dashboard
        localStorage.setItem('accessToken', result.accessToken);
        closeModal()
        navigate('/');
        toast.success("Login successful")
      } else {
        // Handle login errors (e.g., invalid credentials
        alert(result.error);
        toast.error("Invalid credentials")
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      {isModalOpen && 
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            
            <div>
              <h1>Signin</h1>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input 
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-80 px-3 py-1 border rounded"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input 
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-80 px-3 py-1 border rounded"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              <div className='flex justify-around mt-4'>
                <button 
                  type='submit' 
                  className="btn btn-active btn-primary text-white w-28" 
                  onClick={handleSubmit(onSubmit)}
                >
                  Submit
                </button>
                <p>Not registered?{" "}
                  <Link to="/registration" className='underline text-blue-500 cursor-pointer' onClick={closeModal}>
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </dialog>
      }
    </div>
  );
}

export default SignIn;
