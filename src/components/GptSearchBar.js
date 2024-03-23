import React, { useRef } from "react";
import getMovieRecommendations from "../utils/openai";
import searchMovie from "../hooks/searchMovie";
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
    <div className="flex justify-around ">
      <form
        className="w-1/2 bg-red-600 rounded-lg mt-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="bg-purple-100 m-2 w-[80%] rounded-lg p-2 text-black"
          placeholder="Feeling happy, sad, thrilled? Discover movies to match."
        />
        <button
          onClick={handleGPTSearchClick}
          className="bg-red-400 m-2 rounded-lg w-20 p-2 text-white"
        >
          Find
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
