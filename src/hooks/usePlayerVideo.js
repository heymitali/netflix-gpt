import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addVideo } from "../utils/playerSlice";

const usePlayerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filteredData = json.results?.filter(
      (video) => video.type === "Trailer"
    );
    if (filteredData) {
      const video = filteredData?.length ? filteredData[0] : json.results[0];
      dispatch(addVideo(video));
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default usePlayerVideo;
