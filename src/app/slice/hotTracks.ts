import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "../store";

export interface HotTracksState {
  track: number;
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: HotTracksState = {
  track: null,
  value: 0,
  status: "idle",
};

export const hotTracksSlice = createSlice({
  name: "hotTracks",
  initialState,

  reducers: {
    setTrack: (state, action: PayloadAction<number>) => {
      state.track = action.payload;
    },
  },
});

export const { setTrack } = hotTracksSlice.actions;

export const selectTrack = (state: AppState) => state.hotTracks.track;

export default hotTracksSlice.reducer;
