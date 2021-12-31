import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "../store";

export interface playlistTracksState {
  playlist: any;

  value: any;
  status: "idle" | "loading" | "failed";
}

const initialState: playlistTracksState = {
  playlist: null,
  value: 0,
  status: "idle",
};

export const playlistTracksSlice = createSlice({
  name: "playlistTracks",
  initialState,

  reducers: {
    setPlaylist: (state, action: PayloadAction<any>) => {
      state.playlist = action.payload;
    },
  },
});

export const { setPlaylist } = playlistTracksSlice.actions;

export const selectPlaylist = (state: AppState) =>
  state.playlistTracks.playlist;

export default playlistTracksSlice.reducer;
