import React from "react";
import { useNavigate } from "react-router-dom";
import { MOVIE_CONTENT } from "../utils/constants";

const VideoTitle = ({ title, overview, id }) => {
  const navigate = useNavigate();

  const handlePlayBtn = () => {
    navigate("/player/" + MOVIE_CONTENT + "/" + id);
  };

  return (
    <div className="mt-[16rem] ml-12 p-2 w-1/2 absolute text-white z-30">
      <h1 className="text-5xl py-4 font-bold">{title}</h1>
      <p className="text-xl">{overview}</p>
      <div className="py-4 flex justify-start">
        <button
          className="text-lg my-4 mr-4 px-10 py-3 bg-white text-black rounded-lg hover:bg-opacity-60 font-semibold"
          onClick={handlePlayBtn}
        >
          ▶&nbsp;&nbsp;&nbsp;Play
        </button>
        <button className="text-lg my-4 mr-4 px-8 py-3 text-white bg-gray-500 bg-opacity-80 hover:bg-opacity-60 rounded-lg font-semibold">
          ⓘ&nbsp;&nbsp;&nbsp;More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
