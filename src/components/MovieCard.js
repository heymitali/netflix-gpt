import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div>
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
