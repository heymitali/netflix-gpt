import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import usePlayerVideo from "../hooks/usePlayerVideo";

const Player = () => {
  const { movieId } = useParams();
  usePlayerVideo(movieId);
  const video = useSelector((store) => store.player?.playerVideo);

  return (
    <div className="bg-black">
      <div className="h-1/2 max-h-[1000px]">
        <iframe
          onClick={(e) => e.preventDefault()}
          className="w-screen aspect-video scale-150"
          src={
            "https://www.youtube.com/embed/" +
            video?.key +
            "?&autoplay=1&controls=0&rel=0&playlist=" +
            video?.key
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default Player;
