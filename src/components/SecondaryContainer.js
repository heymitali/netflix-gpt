import React from "react";
import MovieList from "./VideoList";
import { useSelector } from "react-redux";
import { MOVIE_CONTENT, TV_SHOW_CONTENT } from "../utils/constants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black ">
      <div className="px-4 -mt-28 overflow-hidden text-white relative z-20 w-screen text-xl">
        <MovieList
          category={"Now Playing"}
          moviesData={movies?.nowPlayingMovies}
          contentType={MOVIE_CONTENT}
        />
        <MovieList
          category={"TV Shows"}
          moviesData={movies?.tvShows}
          contentType={TV_SHOW_CONTENT}
        />
        <MovieList
          category={"Upcoming on Netflix"}
          moviesData={movies?.upComingMovies}
          contentType={MOVIE_CONTENT}
        />
        <MovieList
          category={"Top Rated"}
          moviesData={movies?.topRatedMovies}
          contentType={MOVIE_CONTENT}
        />
        <MovieList
          category={"Popular"}
          moviesData={movies?.popularMovies}
          contentType={MOVIE_CONTENT}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
