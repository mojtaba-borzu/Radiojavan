//libraries
import React from "react";

//redux
import {
  setPlaylist,
  selectPlaylist,
} from "../../../../app/slice/playlistTraksSlice";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import PlaylistTracks from "./PlaylistTracks";

const rowPlaylists = [
  {
    id: 1,
    value: "Today's Top Hits",
    iconUrl:
      "https://assets.rjassets.com/static/playlist/5883691/28910480c6580da.jpg",
  },
  {
    id: 2,
    value: "Realxing",
    iconUrl:
      "https://assets.rjassets.com/static/playlist/311275/f294e34b0954f95.jpg",
  },
  {
    id: 3,
    value: "Fogoladeh",
    iconUrl:
      "https://assets.rjassets.com/static/playlist/2035721/aec6eac861bbdf8.jpg",
  },
  {
    id: 4,
    value: "Mega Hit Max",
    iconUrl:
      "https://assets.rjassets.com/static/playlist/8788501/25cd30a318e792d.jpg",
  },
  {
    id: 5,
    value: "Dahe 80",
    iconUrl:
      "https://assets.rjassets.com/static/playlist/2921032/b90a11e240bf499.jpg",
  },
  {
    id: 6,
    value: "Sonati",
    iconUrl:
      "https://assets.rjassets.com/static/playlist/1503322/f39001938eca80f.jpg",
  },
];

function Playlists() {
  //instance
  const dispatch = useAppDispatch();

  //selectors
  const playlists = useAppSelector(selectPlaylist);
  return (
    <>
      <div className="w-full flex flex-col gap-[30px]">
        <div className="w-full flex justify-center text-[20px] text-white px-[20px] ">
          <div className="w-full flex flex-row justify-between ">
            <div className="text-[30px]">Playlists </div>
            <div className="flex items-center border border-gray-700 px-[5px] rounded-lg text-[16px] cursor-pointer">
              View More
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between px-[20px]  gap-[10px]">
          {rowPlaylists.map((playlists: any) => {
            return (
              <div
                onClick={() => {
                  dispatch(setPlaylist(playlists.id));
                }}
                key={playlists.id}
              >
                <div className="relative w-full flex flex-col justify-center items-center hover:scale-105 duration-700 hover:opacity-100 opacity-80 cursor-pointer ">
                  <img className="rounded-md" src={playlists.iconUrl} />
                  <div className="px-[10px] w-full flex justify-start text-white ">
                    {playlists.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {playlists && <PlaylistTracks />}
    </>
  );
}

export default Playlists;
