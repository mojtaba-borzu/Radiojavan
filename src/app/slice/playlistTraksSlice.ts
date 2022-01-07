import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "../store";

export interface playlistTracksState {
  playlist: any;
  playTraks: any;
  shiftPlayTracks: boolean;

  value: any;
  status: "idle" | "loading" | "failed";
}

const initialState: playlistTracksState = {
  playlist: null,
  playTraks: "",
  shiftPlayTracks: false,
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
    setPlayTraks: (state, action: PayloadAction<any>) => {
      state.playTraks = action.payload;
    },
    setShiftPlayTracks: (state, action: PayloadAction<any>) => {
      state.shiftPlayTracks = action.payload;
    },
  },
});

export const { setPlaylist, setPlayTraks, setShiftPlayTracks } =
  playlistTracksSlice.actions;

export const selectPlaylist = (state: AppState) =>
  state.playlistTracks.playlist;

export const selectPlayTraks = (state: AppState) =>
  state.playlistTracks.playTraks;

export const selectShiftPlayTracks = (state: AppState) =>
  state.playlistTracks.shiftPlayTracks;

export default playlistTracksSlice.reducer;
