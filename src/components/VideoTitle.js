import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="mt-52 ml-12 p-2 w-1/2 absolute text-white z-30">
      <h1 className="text-4xl py-4 font-bold">{title}</h1>
      <p>{overview}</p>
      <div className="py-4 flex justify-start">
        <button className="my-4 mr-4 px-6 py-2 h-12 bg-white text-black rounded-lg hover:bg-opacity-50">
          ▶ Play
        </button>
        <button className="my-4 mr-4 px-6 py-2  text-white bg-gray-500 bg-opacity-80 rounded-lg ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
