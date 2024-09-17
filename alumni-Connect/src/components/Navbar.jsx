import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from "../images/logo.svg";
import { NavLink } from "react-router-dom";
import SignIn from "./SignIn";
import toast from "react-hot-toast";


function Navbar() {
  const ulItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline decoration-4 underline-offset-[8px] text-indigo-900 duration-200" : "text-indigo-900 "
          }
        
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/registration"
          className={({ isActive }) =>
            isActive ? "underline decoration-4 underline-offset-[8px] text-indigo-900 duration-200" : "text-indigo-900 "
          }
        >
          Alumni Registration
        </NavLink>
      </li>
      <li>
      <NavLink
          to="/donation-portal"
          className={({ isActive }) =>
            isActive ? "underline decoration-4 underline-offset-[8px] text-indigo-900 duration-200" : "text-indigo-900 "
          }
        >
         Donation Portal
        </NavLink>
      </li>
      <li>
      <NavLink
          to="/networking-hub"
          className={({ isActive }) =>
            isActive ? "underline decoration-4 underline-offset-[8px] text-indigo-900 duration-200" : "text-indigo-900 "
          }
        >
          Nerworking Hub
        </NavLink>
      </li>
      <li>
      <NavLink
          to="/job-portal"
          className={({ isActive }) =>
            isActive ? "underline decoration-4 underline-offset-[8px] text-indigo-900 duration-200" : "text-indigo-900 "
          }
        >
          Job Portal
        </NavLink>
      </li>
      <li>
      <NavLink
          to="/alumni-dir"
          className={({ isActive }) =>
             isActive ? "underline decoration-4 underline-offset-[8px] text-indigo-900 duration-200" : "text-indigo-900 "          }
        >
          Alumni Directory
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = ()=>{
    localStorage.removeItem('accessToken'); 
    toast.success("Logout successfully")
  }

  return (
    <div className="relative">
    <div className="navbar bg-white z-50 border-b-2" style={{backgroundColor:"#FBF9F1"}} >
      <div className="navbar-start">
        <img src={logo} alt="" style={{ height: "36px" }} />
        <a
          className="btn btn-ghost text-4xl text-black"
          style={{ fontFamily: "Lexend" }}
        >
          AlumniConnect
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className=" menu-horizontal px-1 gap-6"
          style={{ fontFamily: "Manrope" }}
        >
          {ulItem}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {ulItem}
          </ul>
        </div>
        <div>
           <a
          className="btn btn-active btn-primary text-white w-28"
          style={{ fontFamily: "Manrope" }}
          onClick={()=>document.getElementById("my_modal_3").showModal()}
        >
          Login
        </a>
        <SignIn/>
        </div>
        <div>
           <a
          className="btn  w-28 ms-8"
          style={{ fontFamily: "Manrope" }}
          onClick={handleLogOut}
        >
          Logout
        </a>
        </div>
       
        {/* <IoSearch className="w-[24px] h-[24px] fill-current text-black mx-3" />
        <IoIosNotificationsOutline className="w-[24px] h-[24px] fill-current text-black mx-3" /> */}
      </div>
    </div>
    </div>
  );
}

export default Navbar;
