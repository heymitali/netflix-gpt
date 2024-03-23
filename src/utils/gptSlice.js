import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResult: null,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearMovieResults: (state, action) => {
      state.movieResults = null;
      state.movieNames = null;
    },
  },
});

export default gptSlice.reducer;
export const { toggleGptSearch, addMovieResults, clearMovieResults } =
  gptSlice.actions;
