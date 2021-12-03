import React from "react";

import Tracks from "./Tracks";

//redux
import { setTrack, selectTrack } from "../../../../app/slice/hotTracks";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

const rowHotTracks = [
  {
    id: 1,
    value: "Sareen",
    label: "Asghar Agha",
    iconUrl:
      "https://assets.rjassets.com/static/mp3/saaren-asghar-agha/558fc655aef395a.jpg",
  },
  {
    id: 2,
    value: "Shadmehr Aghili",
    label: "Daste Man Nist",
    iconUrl:
      "https://assets.rjassets.com/static/mp3/shadmehr-aghili-daste-man-nist/52fbbf01742ce4f.jpg",
  },
  {
    id: 3,
    value: "Anita",
    label: "Shooresho Daravordi",

    iconUrl:
      "https://assets.rjassets.com/static/mp3/anita-shooresho-daravordi/cea64d66f7955a3.jpg",
  },
  {
    id: 4,
    value: "Sohrab Pakzad",
    label: "Shookhi Nadaram",
    iconUrl:
      "https://assets.rjassets.com/static/mp3/sohrab-pakzad-shookhi-nadaram-(ft-asef-aria)/ed727faafea9a36.jpg",
  },
  {
    id: 5,
    value: "Masoud Sadeghloo",
    label: "Hala Hala Ha",
    iconUrl:
      "https://assets.rjassets.com/static/mp3/masoud-sadeghloo-hala-hala-ha/1148f4fead3a08c.jpg",
  },
  {
    id: 6,
    value: "TM Bax",
    label: "Cha Cha",
    iconUrl:
      "https://assets.rjassets.com/static/mp3/tm-bax-cha-cha/55a7c8d35708b3c.jpg",
  },
];

function HotTracks() {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector(selectTrack);
  return (
    <>
      <div className="w-full flex flex-col gap-[30px]">
        <div className="w-full flex justify-center text-[20px] text-white px-[20px] ">
          <div className="w-full flex flex-row justify-between ">
            <div className="text-[20px]">Hot Tracks </div>
            <div className="flex items-center border border-gray-700 px-[5px] rounded-lg text-[14px] cursor-pointer">
              View More
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between px-[20px] gap-[10px] ">
          {rowHotTracks.slice(0, 3).map((playlists: any) => {
            return (
              <div
                onClick={() => dispatch(setTrack(playlists.id))}
                key={playlists.id}
              >
                {/* {console.log(tracks)} */}
                <div className="relative w-full flex flex-col justify-center items-center hover:scale-105 duration-500 hover:opacity-100 opacity-80 cursor-pointer ">
                  <img className=" rounded-md" src={playlists.iconUrl} />
                  <div className="px-[10px] w-full flex justify-start text-white text-[12px] ">
                    {playlists.value}
                  </div>
                  <div className="px-[10px] w-full flex justify-start text-white font-medium text-[12px] ">
                    {playlists.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {tracks && <Tracks />}
    </>
  );
}

export default HotTracks;

const breakingWord = (word: any) => {
  let newWord = `${word.slice(0, 15)} ...`;
  return newWord;
};
