import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import usePlayerVideo from "../hooks/usePlayerVideo";

const Player = () => {
  const { videoId, contentType } = useParams();
  usePlayerVideo(videoId, contentType);
  const video = useSelector((store) => store.player?.moviePlayerVideo);
  const videoKey = video?.key;

  const videoUrl = `https://www.youtube.com/embed/${videoKey}?&autoplay=1&controls=0&rel=0&playlist=${videoKey}`;

  return (
    <div className="bg-black">
      <div className="h-1/2 max-h-[1000px]">
        {!video && (
          <img
            alt="bufferingGif"
            src="https://media.tenor.com/je-huTL1vwgAAAAi/loading-buffering.gif"
          />
        )}
        {video && (
          <iframe
            onClick={(e) => e.preventDefault()}
            className="w-screen aspect-video scale-150"
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Player;
