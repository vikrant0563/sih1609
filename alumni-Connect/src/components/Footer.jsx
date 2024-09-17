import React from "react";
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import logo from "../images/logo.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t-2 py-10 w-full mt-10" style={{ backgroundColor: "#CDC1FF" }}>
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Logo & About Section */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <img src={logo} alt="AlumniConnect Logo" className="h-10" />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">AlumniConnect</h2>
            <p className="text-gray-600 mt-2">
              Connecting alumni to each other and to their alma mater.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="text-gray-600">
              <li className="mb-2">
                <NavLink to="/" className="hover:text-indigo-600">Home</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/registration" className="hover:text-indigo-600">Alumni Registration</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/donation-portal" className="hover:text-indigo-600">Donation Portal</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/networking-hub" className="hover:text-indigo-600">Networking Hub</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/job-portal" className="hover:text-indigo-600">Job Portal</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/alumni-dir" className="hover:text-indigo-600">Alumni Directory</NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Us</h3>
            <p className="text-gray-600">
              Email: support@alumniconnect.com
            </p>
            <p className="text-gray-600 mt-2">
              Phone: +1 234 567 890
            </p>
            <p className="text-gray-600 mt-2">
              Address: 123 Alumni St, College Town, USA
            </p>
          </div>

          {/* Social Media */}
          <div className="w-full lg:w-1/4">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <IoLogoFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <IoLogoTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <IoLogoLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <IoLogoInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t pt-6 text-center text-gray-600">
          <p>© {new Date().getFullYear()} AlumniConnect. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
