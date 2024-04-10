import React, { useRef } from "react";
import getMovieRecommendations from "../utils/openai";
import searchMovie from "../hooks/useSearchMovie";
import { useDispatch } from "react-redux";
import { addMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef("");

  const handleGPTSearchClick = async () => {
    const moviePromises = [];
    const recommendedMovies = await getMovieRecommendations(
      searchText.current.value
    );

    for (let i = 0; i < recommendedMovies.length; i++) {
      moviePromises.push(searchMovie(recommendedMovies[i]));
    }

    const searchResults = await Promise.all(moviePromises);
    console.log("searchResults >>>>", searchResults);
    dispatch(
      addMovieResults({
        movieNames: recommendedMovies,
        movieResults: searchResults,
      })
    );
  };

  return (
    <div className="flex justify-center z-50">
      <form className="rounded-lg" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className="m-2 w-[400px] p-2 px-3 text-xs sm:text-xs md:text-sm lg:w-[500px] xl:w-[600px] xl:p-3 rounded-lg text-black lg:text-lg bg-white"
          placeholder="Feeling happy, sad, thrilled? Discover movies to match."
        />
        <button
          onClick={handleGPTSearchClick}
          className="bg-red-600 rounded-lg xl:w-[140px] ml-2 xl:p-3 p-2 px-5 lg:px-8 text-xs sm:text-sm md:text-md lg:text-lg text-white font-bold"
        >
          Find
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
