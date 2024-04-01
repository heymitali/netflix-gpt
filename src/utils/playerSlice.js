import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    playerVideo: null,
  },
  reducers: {
    addVideo: (state, action) => {
      state.playerVideo = action.payload;
    },
  },
});
export default playerSlice.reducer;
export const { addVideo } = playerSlice.actions;
