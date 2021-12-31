import React from "react";

//redux
import {
  selectPlaylist,
  setPlaylist,
} from "../../app/slice/playlistTraksSlice";
//redux
import { setTrack, selectTrack } from "../../app/slice/hotTracks";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

function DesktopLayout({ children }: { children: any }) {
  //selectors
  const playlist = useAppSelector(selectPlaylist);
  const track = useAppSelector(selectTrack);

  return (
    <div className=" w-full h-full flex flex-col  items-center bg-black">
      <div className="fixed top-0  mx-auto container py-[10px] px-[10px]  w-full h-[70px] flex justify-center items-center  z-20  ">
        <div className="  w-full h-full flex justify-center border border-gray-700 text-white rounded-lg bg-black opacity-80">
          <button className="w-1/2 h-full flex flex-row justify-start items-center text-[20px] px-[20px] font-medium ">
            <img className="w-[80px] h-[40px]" src="/images/radiojavan.png" />
            <span className="text-[24px] ">R</span>ADIO{" "}
            <span className="text-[24px] ">J</span>AVAN
          </button>
          <div className="w-1/2 h-full  text-white flex justify-end items-center gap-[20px] px-[20px]">
            <button className={`font-semibold ${track ? "text-red-700" : ""}`}>
              Music{" "}
            </button>
            <button
              className={`font-semibold ${playlist ? " text-red-700" : ""}`}
            >
              Playlists
            </button>
            <button className="font-semibold">Videos</button>
            <button className="font-semibold">Podcasts</button>
            <button className="font-semibold">RJTV</button>
            <button className="font-semibold">Events</button>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default DesktopLayout;
