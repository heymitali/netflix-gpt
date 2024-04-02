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
          className="m-2 w-[600px] rounded-lg p-3 text-black text-lg bg-white"
          placeholder="Feeling happy, sad, thrilled? Discover movies to match."
        />
        <button
          onClick={handleGPTSearchClick}
          className="bg-red-600 rounded-lg w-[140px] ml-2 p-3 text-lg text-white font-bold"
        >
          Find
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
