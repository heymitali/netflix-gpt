import React from "react";
import { useSelector } from "react-redux";
import VideoList from "./VideoList";

const GptSearchResults = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieResults) return;
  else if (movieResults.length === 0) {
    return (
      <div>
        <h1 className="text-white text-3xl font-bold text-center">
          Sorry, I could'nt suggest anything that matches your search
        </h1>
      </div>
    );
  } else
    return (
      <div>
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
