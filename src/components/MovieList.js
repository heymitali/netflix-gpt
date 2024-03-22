import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ category, moviesData }) => {
  return (
    <div className="">
      <h1 className="m-2 p-2">{category}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {" "}
          {moviesData &&
            moviesData.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
