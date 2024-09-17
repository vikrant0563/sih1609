import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Registration from "../src/components/Registration.jsx";
import Home from './components/Home.jsx';
import DonationPortal from './components/DonationPortal.jsx';
import JobPortal from './components/JobPortal.jsx';
import AlumniDir from './components/AlumniDir.jsx';
import NetworkingHub from './components/NetworkingHub.jsx';
import FindJobs from './components/FindJobs.jsx';
import PostJobs from './components/PostJobs.jsx';
import {Toaster} from "react-hot-toast"

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/donation-portal" element={<DonationPortal />} />
      <Route path="/networking-hub" element={<NetworkingHub />} />
      <Route path="/job-portal" element={<JobPortal />} />
      <Route path="/alumni-dir" element={<AlumniDir />} />
      <Route path='/find-jobs' element={<FindJobs/>}/>
      <Route path='/post-jobs' element={<PostJobs/>}/>
    </Route>
  )
);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </StrictMode>,
)
