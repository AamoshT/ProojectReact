import React from "react";
import Video1 from "../assets/video1.mp4";
import Video2 from "../assets/video2.mp4";

const herosection = () => {
  return (
    <div className="flex flex-col items-center mt-4 lg:mt-15">
      <h1 className="text-7xl text-center tracking-wide">
        Build With AI
        <span className="bg-gradient-to-r from-[#5B4B9A] via-[#00A1E4] to-[#D5006D] text-transparent bg-clip-text">
        </span>
      </h1>
      <p className="mt-10 text-center text-lg max-wl-500">
        This is the discription text area
      </p>
      <div className="flex justify-center py-10 ">
      <h1></h1>
        <a
          className="bg-gradient-to-r from-[#E4B5F4] via-[#00A1E4] to-[#191970] transition-all duration-500 hover:from-[#5B4B9A] hover:to-[#00A1E4] py-3 px-3 rounded-md"
        >
          START NOW
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoplay
          loop
          muted
          className="rounded-lg w-1/3 border border-blue-700 shadow-blue-400 mx-5 my-3"
        >
          <source src={Video1} type="video/mp4" />
          Your browser doesnot support video
        </video>
        <video
          autoplay
          loop
          muted
          className="rounded-lg w-1/3 border border-blue-700 shadow-blue-400 mx-5 my-3"
        >
          <source src={Video2} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default herosection;
