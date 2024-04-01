import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/player/" + movie.id);
    console.log(movie);
  };

  if (
    !movie.poster_path ||
    movie.poster_path === "" ||
    movie.poster_path === " "
  )
    return;
  return (
    <div onClick={handleClick}>
      <div className="w-48 px-2">
        <img
          className="rounded-sm"
          alt={movie.title}
          src={IMG_CDN_URL + movie.poster_path}
        ></img>
      </div>
    </div>
  );
};

export default MovieCard;
