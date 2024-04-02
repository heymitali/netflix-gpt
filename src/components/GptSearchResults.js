import React from "react";
import { useSelector } from "react-redux";
import VideoList from "./VideoList";

const GptSearchResults = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieResults) return;
  else if (movieResults.length === 0) {
    return (
      <div>
        <h1 className="text-white text-4xl font-bold text-center mt-20">
          Sorry, I could'nt suggest anything that matches your search. <br />
          Please try again !!
        </h1>
      </div>
    );
  } else
    return (
      <div className="mt-36 ml-8 pb-3">
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
