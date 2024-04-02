import React from "react";
import VideoCard from "./VideoCard";

const VideoList = ({ category, moviesData, contentType }) => {
  return (
    <div className="h-auto min-h-[320px] mb-[2.5vw]">
      <h1 className="m-2 p-2 text-white font-semibold text-2xl">{category}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex last:mr-8">
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
