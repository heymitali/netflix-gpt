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
    <div onClick={handleClick} className="cursor-pointer">
      <div className="w-48 px-2">
        <img
          className="rounded-sm"
          alt={videoData.title}
          src={IMG_CDN_URL + videoData.poster_path}
        ></img>
      </div>
    </div>
  );
};

export default MovieCard;
