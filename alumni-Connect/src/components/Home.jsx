import React from "react";
import hero from "../images/hero.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState,useEffect } from "react";
import DonateCard from "./DonateCard";
import Footer from "./Footer";

function Home() {
  const [donateAlumni, setDonateAlumni] = useState([]);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2, // Show two slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show two slides at a time for larger screens
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show one slide at a time for medium screens
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Show one slide at a time for small screens
          slidesToScroll: 1
        }
      }
    ]
  };
  
  useEffect(() => {
    // Fetch alumni data from the backend
    const fetchAlumni = async () => {
      try {
        const response = await fetch("http://localhost:8001/donation");
        const data = await response.json();
        setDonateAlumni(data);
       
      } catch (error) {
        console.error("Error fetching alumni data:", error);
      }
    };

    fetchAlumni();
  }, []);

  console.log(donateAlumni)

  return (
    <div className="flex flex-col items-center bg-white">
      {/* Hero Image Section */}
      <div className="w-full h-[50rem] pt-6">
        <img
          src={hero}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Slider Section */}
      <div className="max-w-[1200px] w-full mt-20 px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-10">
          Our Generous Donors
        </h2>
        <Slider {...settings}>
          {donateAlumni.map((item) => (
            <DonateCard alumnus={item} key={item._id} />
          ))}
        </Slider>
      </div>

      <Footer/>
    </div>
  );
}

export default Home;
