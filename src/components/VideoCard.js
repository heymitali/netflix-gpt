import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ videoData, contentType }) => {
  const navigate = useNavigate();
  if (!contentType) {
    contentType = videoData.media_type;
  }

  const handleClick = () => {
    navigate("/player/" + contentType + "/" + videoData.id);
  };

  if (
    !videoData.poster_path ||
    videoData.poster_path === "" ||
    videoData.poster_path === " "
  ) {
    return;
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border-2 border-transparent hover:border-white mx-1 lg:mx-2 rounded-md"
    >
      <div className="relative w-24 h-[150px] sm:w-36 sm:h-[200px] md:w-40 md:h-[230px] lg:w-48 lg:h-[300px]">
        <img
          className="absolute h-[100%] w-full object-cover overflow-hidden rounded-sm"
          alt={videoData.title}
          src={IMG_CDN_URL + videoData.poster_path}
        ></img>
      </div>
    </div>
  );
};

export default MovieCard;
