import { API_OPTIONS } from "../utils/constants";

const searchMovie = async (movieName) => {
  const editedMovieName = movieName.replace(/\s+/g, " ").trim();
  editedMovieName.split(" ").join("%20");

  const data = await fetch(
    "https://api.themoviedb.org/3/search/multi?query=" +
      editedMovieName +
      "&include_adult=false&language=en-US&page=1",
    API_OPTIONS
  );
  const json = await data.json();
  const list = json?.results;
  return list;
};

export default searchMovie;
