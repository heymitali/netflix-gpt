import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black ">
      <div className="px-4 -mt-28 overflow-hidden text-white relative z-20 w-screen text-xl">
        <MovieList
          category={"Now Playing"}
          moviesData={movies?.nowPlayingMovies}
        />
        <MovieList category={"TV Shows"} moviesData={movies?.tvShows} />
        <MovieList
          category={"Upcoming on Netflix"}
          moviesData={movies?.upComingMovies}
        />
        <MovieList category={"Top Rated"} moviesData={movies?.topRatedMovies} />

        <MovieList category={"Popular"} moviesData={movies?.popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
