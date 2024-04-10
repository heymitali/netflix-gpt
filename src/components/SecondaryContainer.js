import React from "react";
import VideoList from "./VideoList";
import { useSelector } from "react-redux";
import { MOVIE_CONTENT, TV_SHOW_CONTENT } from "../utils/constants";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black pl-5 sm:pl-8 lg:pl-12 mt-[5.3rem] sm:mt-[2rem] md:mt-[2rem] xl:mt-[-15%] pb-8 w-screen">
      <div className="-mt-28 overflow-hidden text-white relative z-20 text-xl">
        <VideoList
          category={"Now Playing"}
          moviesData={movies?.nowPlayingMovies}
          contentType={MOVIE_CONTENT}
        />
        <VideoList
          category={"TV Shows"}
          moviesData={movies?.tvShows}
          contentType={TV_SHOW_CONTENT}
        />
        <VideoList
          category={"Upcoming on Netflix"}
          moviesData={movies?.upComingMovies}
          contentType={MOVIE_CONTENT}
        />
        <VideoList
          category={"Top Rated"}
          moviesData={movies?.topRatedMovies}
          contentType={MOVIE_CONTENT}
        />
        <VideoList
          category={"Popular"}
          moviesData={movies?.popularMovies}
          contentType={MOVIE_CONTENT}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
