import React from "react";
import { useSelector } from "react-redux";
import VideoList from "./VideoList";

const GptSearchResults = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieResults) return;
  else if (movieResults.length === 0) {
    return (
      <div>
        <h1 className="text-white text-xs md:text-xl xl:text-4xl font-bold text-center mt-10 xl:mt-20">
          Sorry, I could'nt suggest anything that matches your search. <br />
          Please try again !!
        </h1>
      </div>
    );
  } else
    return (
      <div className="mt-12 sm:mt-14 md:mt-20 xl:mt-32 ml-4 sm:ml-8 pb-3">
        {movieNames.map((movieName, index) => (
          <VideoList
            key={index}
            category={movieName}
            moviesData={movieResults[index]}
          />
        ))}
      </div>
    );
};

export default GptSearchResults;
