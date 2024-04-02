import React from "react";
import VideoCard from "./VideoCard";

const VideoList = ({ category, moviesData, contentType }) => {
  return (
    <div className="h-auto min-h-[320px] p-4">
      <h1 className="m-2 p-2 text-white font-semibold text-2xl">{category}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {" "}
          {moviesData &&
            moviesData.map((movie) => (
              <VideoCard
                videoData={movie}
                contentType={contentType}
                key={movie.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
