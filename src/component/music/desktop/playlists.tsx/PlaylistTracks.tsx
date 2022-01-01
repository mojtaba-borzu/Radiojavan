//libraries
import React, { useState } from "react";

//redux
import {
  selectPlaylist,
  setPlaylist,
} from "../../../../app/slice/playlistTraksSlice";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";

const rowTracks = [
  {
    id: 1,

    name: "Today's Top Hits",
    followers: "102,325",

    iconUrl:
      "https://assets.rjassets.com/static/playlist/5883691/28910480c6580da.jpg",

    playlist: [
      {
        id: 1,
        value: "Saaren",
        label: "Asghar Agha",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/saaren-beza-boro/8f1c9f7b8d00d2e-thumb.jpg",
      },
      {
        id: 2,
        value: "Anita",
        label: "To Faghat Boro",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/anita-to-faghat-boro/cbfa6e40e44dd02-thumb.jpg",
      },
      {
        id: 3,
        value: "Shadmehr Aghili",
        label: "Yakh Zadam",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/shadmehr-aghili-yakh-zadam/b3776d474568347-thumb.jpg",
      },
      {
        id: 4,
        value: "Masood Sadeghlo",
        label: "Zade Baron",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/masoud-sadeghloo-zade-baroon/7c0e8aa8d1fc3f6-thumb.jpg",
      },
      {
        id: 5,
        value: "Soohrab Pakzad",
        label: "Nago Na",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/sohrab-pakzad-nagoo-na/1c1ddce6b549fec-thumb.jpg",
      },
    ],
  },
  {
    id: 2,

    name: "Realxing",
    followers: "12,325",

    iconUrl:
      "https://assets.rjassets.com/static/playlist/311275/f294e34b0954f95.jpg",

    playlist: [
      {
        id: 1,
        value: "Saaren",
        label: "Asghar Agha",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/saaren-beza-boro/8f1c9f7b8d00d2e-thumb.jpg",
      },
      {
        id: 2,
        value: "Anita",
        label: "To Faghat Boro",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/anita-to-faghat-boro/cbfa6e40e44dd02-thumb.jpg",
      },
      {
        id: 3,
        value: "Shadmehr Aghili",
        label: "Yakh Zadam",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/shadmehr-aghili-yakh-zadam/b3776d474568347-thumb.jpg",
      },
      {
        id: 4,
        value: "Masood Sadeghlo",
        label: "Zade Baron",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/masoud-sadeghloo-zade-baroon/7c0e8aa8d1fc3f6-thumb.jpg",
      },
      {
        id: 5,
        value: "Soohrab Pakzad",
        label: "Nago Na",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/sohrab-pakzad-nagoo-na/1c1ddce6b549fec-thumb.jpg",
      },
    ],
  },
  {
    id: 3,

    name: "Fogoladeh",
    followers: "18,325",

    iconUrl:
      "https://assets.rjassets.com/static/playlist/2035721/aec6eac861bbdf8.jpg",

    playlist: [
      {
        id: 1,
        value: "Saaren",
        label: "Asghar Agha",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/saaren-beza-boro/8f1c9f7b8d00d2e-thumb.jpg",
      },
      {
        id: 2,
        value: "Anita",
        label: "To Faghat Boro",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/anita-to-faghat-boro/cbfa6e40e44dd02-thumb.jpg",
      },
      {
        id: 3,
        value: "Shadmehr Aghili",
        label: "Yakh Zadam",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/shadmehr-aghili-yakh-zadam/b3776d474568347-thumb.jpg",
      },
      {
        id: 4,
        value: "Masood Sadeghlo",
        label: "Zade Baron",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/masoud-sadeghloo-zade-baroon/7c0e8aa8d1fc3f6-thumb.jpg",
      },
      {
        id: 5,
        value: "Soohrab Pakzad",
        label: "Nago Na",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/sohrab-pakzad-nagoo-na/1c1ddce6b549fec-thumb.jpg",
      },
    ],
  },
  {
    id: 4,

    name: "Mega Hit Max",
    followers: "25,320",

    iconUrl:
      "https://assets.rjassets.com/static/playlist/8788501/25cd30a318e792d.jpg",

    playlist: [
      {
        id: 1,
        value: "Saaren",
        label: "Asghar Agha",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/saaren-beza-boro/8f1c9f7b8d00d2e-thumb.jpg",
      },
      {
        id: 2,
        value: "Anita",
        label: "To Faghat Boro",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/anita-to-faghat-boro/cbfa6e40e44dd02-thumb.jpg",
      },
      {
        id: 3,
        value: "Shadmehr Aghili",
        label: "Yakh Zadam",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/shadmehr-aghili-yakh-zadam/b3776d474568347-thumb.jpg",
      },
      {
        id: 4,
        value: "Masood Sadeghlo",
        label: "Zade Baron",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/masoud-sadeghloo-zade-baroon/7c0e8aa8d1fc3f6-thumb.jpg",
      },
      {
        id: 5,
        value: "Soohrab Pakzad",
        label: "Nago Na",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/sohrab-pakzad-nagoo-na/1c1ddce6b549fec-thumb.jpg",
      },
    ],
  },
  {
    id: 5,

    name: "Dahe 80",
    followers: "80,325",

    iconUrl:
      "https://assets.rjassets.com/static/playlist/2921032/b90a11e240bf499.jpg",

    playlist: [
      {
        id: 1,
        value: "Saaren",
        label: "Asghar Agha",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/saaren-beza-boro/8f1c9f7b8d00d2e-thumb.jpg",
      },
      {
        id: 2,
        value: "Anita",
        label: "To Faghat Boro",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/anita-to-faghat-boro/cbfa6e40e44dd02-thumb.jpg",
      },
      {
        id: 3,
        value: "Shadmehr Aghili",
        label: "Yakh Zadam",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/shadmehr-aghili-yakh-zadam/b3776d474568347-thumb.jpg",
      },
      {
        id: 4,
        value: "Masood Sadeghlo",
        label: "Zade Baron",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/masoud-sadeghloo-zade-baroon/7c0e8aa8d1fc3f6-thumb.jpg",
      },
      {
        id: 5,
        value: "Soohrab Pakzad",
        label: "Nago Na",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/sohrab-pakzad-nagoo-na/1c1ddce6b549fec-thumb.jpg",
      },
    ],
  },
  {
    id: 6,

    name: "Sonati",
    followers: "19,540",

    iconUrl:
      "https://assets.rjassets.com/static/playlist/1503322/f39001938eca80f.jpg",

    playlist: [
      {
        id: 1,
        value: "Saaren",
        label: "Asghar Agha",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/saaren-beza-boro/8f1c9f7b8d00d2e-thumb.jpg",
      },
      {
        id: 2,
        value: "Anita",
        label: "To Faghat Boro",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/anita-to-faghat-boro/cbfa6e40e44dd02-thumb.jpg",
      },
      {
        id: 3,
        value: "Shadmehr Aghili",
        label: "Yakh Zadam",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/shadmehr-aghili-yakh-zadam/b3776d474568347-thumb.jpg",
      },
      {
        id: 4,
        value: "Masood Sadeghlo",
        label: "Zade Baron",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/masoud-sadeghloo-zade-baroon/7c0e8aa8d1fc3f6-thumb.jpg",
      },
      {
        id: 5,
        value: "Soohrab Pakzad",
        label: "Nago",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/sohrab-pakzad-nagoo-na/1c1ddce6b549fec-thumb.jpg",
      },
    ],
  },
];

function PlaylistTracks() {
  const [details, setDetails] = useState(false);
  const dispatch = useAppDispatch();

  //selectors
  const playlists = useAppSelector(selectPlaylist);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black  z-10 overflow-hidden py-[100px] flex flex-col items-start px-[30px]">
      <div className="mx-auto container w-full h-[30px]  px-[10px]">
        <div className="w-full h-full border-t border-b  px-[10px] flex items-center">
          <div
            onClick={() => dispatch(setPlaylist(null))}
            className="hover:text-red-600 cursor-pointer text-white text-[20px] font-medium"
          >
            Back
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row mx-auto container ">
        <div className="w-9/12 flex flex-col items-center justify-center py-[30px]">
          <div className="w-full flex flex-row justify-center gap-[10px]">
            <img
              className="w-[320px] rounded-lg"
              src={
                rowTracks.find((track: any) => track.id == playlists).iconUrl
              }
            />
          </div>
          <div className="mt-[5px] text-white font-medium text-[14px]">
            {` ${rowTracks.find((track: any) => track.id == playlists).name}  `}
          </div>

          <div className="mt-[10px] text-white font-medium text-[16px]">
            {`Created by Radio Javan | 50 Songs | ${
              rowTracks.find((track: any) => track.id == playlists).followers
            } followers `}
          </div>
          <div className="mt-[20px] w-full flex flex-row items-center justify-center gap-6">
            <div className=" h-[50px] bg-gray-500 rounded-md flex justify-center items-center text-white gap-2 px-[10px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M20.6692753,18 L12.5096495,18 C12.2281779,18 12,17.7680664 12,17.5 C12,17.2238576 12.2276528,17 12.5096495,17 L20.6692753,17 L17.6707477,14.3762883 C17.4629294,14.1944473 17.4418706,13.878566 17.6237117,13.6707477 C17.8055527,13.4629294 18.121434,13.4418706 18.3292523,13.6237117 L22.3292523,17.1237117 C22.5569159,17.3229173 22.5569159,17.6770827 22.3292523,17.8762883 L18.3292523,21.3762883 C18.121434,21.5581294 17.8055527,21.5370706 17.6237117,21.3292523 C17.4418706,21.121434 17.4629294,20.8055527 17.6707477,20.6237117 L20.6692753,18 Z M20.6692753,7 L17.6707477,4.37628835 C17.4629294,4.19444732 17.4418706,3.87856601 17.6237117,3.6707477 C17.8055527,3.46292938 18.121434,3.44187063 18.3292523,3.62371165 L22.3292523,7.12371165 C22.5569159,7.3229173 22.5569159,7.6770827 22.3292523,7.87628835 L18.3292523,11.3762883 C18.121434,11.5581294 17.8055527,11.5370706 17.6237117,11.3292523 C17.4418706,11.121434 17.4629294,10.8055527 17.6707477,10.6237117 L20.6692753,8 L14.7403124,8 L6.74031242,18 L1.40098049,18 C1.12483811,18 0.900980486,17.7761424 0.900980486,17.5 C0.900980486,17.2238576 1.12483811,17 1.40098049,17 L6.25968758,17 L14.2596876,7 L20.6692753,7 Z M1,7.5 C1,7.22385763 1.22247314,7 1.50966585,7 L9.49033415,7 C9.77181483,7 10,7.23193359 10,7.5 C10,7.77614237 9.77752686,8 9.49033415,8 L1.50966585,8 C1.22818517,8 1,7.76806641 1,7.5 Z"
                  id="path-1"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              Shuffle
            </div>
            <div className=" h-[50px] bg-gray-500 rounded-md flex justify-center items-center text-white gap-2 px-[10px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  d="M17.8580054,10.232628 C19.5932811,11.2087206 19.5941297,12.7908021 17.8580054,13.767372 L8.14199463,19.232628 C6.40671891,20.2087206 5,19.3867791 5,17.400693 L5,6.59930697 C5,4.61146462 6.40587035,3.79080207 8.14199463,4.76737198 L17.8580054,10.232628 Z"
                  id="path-1"
                ></path>
              </svg>{" "}
              Play
            </div>
            <div className=" h-[50px] bg-gray-500 rounded-md flex justify-center items-center text-white gap-2 px-[10px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  d="M12,18.0969895 L17.5182676,21.1474128 L16.4643722,14.6865125 L20.9287445,10.1108776 L14.7591338,9.16824497 L12,3.28992377 L9.24086621,9.16824497 L3.07125551,10.1108776 L7.53562775,14.6865125 L6.48173243,21.1474128 L12,18.0969895 Z M12,19.2419513 L5.20162612,23 L6.5,15.0403252 L1,9.40325225 L8.60081306,8.24195135 L12,1 L15.3991869,8.24195135 L23,9.40325225 L17.5,15.0403252 L18.7983739,23 L12,19.2419513 Z"
                  id="path-1"
                ></path>
              </svg>{" "}
              Follow
            </div>
          </div>
        </div>

        <div className=" w-3/12">
          <div className="mt-[10px] flex flex-col ">
            {rowTracks
              .find((track: any) => track.id == playlists)
              .playlist.map((playlists: any) => (
                <div
                  key={playlists.id}
                  className="w-full flex flex-row justify-between items-center text-white gap-[20px] border-b border-l py-[10px] px-[10px]"
                >
                  <div className="flex flex-row justify-start gap-[20px] cursor-pointer">
                    <img
                      className="w-[60px] rounded-md"
                      src={playlists.iconUrl}
                    />
                    <div className="flex flex-col gap-[5px]">
                      <span>{playlists.value}</span>
                      <span className="font-medium">{playlists.label}</span>
                    </div>
                  </div>
                  <div className="relative w-[40px] h-[40px] rounded-lg bg-[#525252] text-[50px]  flex justify-center items-center cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24 "
                      fill="white"
                    >
                      <path
                        d="M8,22 C9.65685425,22 11,20.6568542 11,19 C11,17.3431458 9.65685425,16 8,16 C6.34314575,16 5,17.3431458 5,19 C5,20.6568542 6.34314575,22 8,22 Z M6.5,7.5 L9.49956417,7.5 C9.77594725,7.5 10,7.73193359 10,8 C10,8.27614237 9.76920319,8.5 9.49956417,8.5 L6.5,8.5 L6.5,11.4995642 C6.5,11.7759472 6.26806641,12 6,12 C5.72385763,12 5.5,11.7692032 5.5,11.4995642 L5.5,8.5 L2.50043583,8.5 C2.22405275,8.5 2,8.26806641 2,8 C2,7.72385763 2.23079681,7.5 2.50043583,7.5 L5.5,7.5 L5.5,4.50043583 C5.5,4.22405275 5.73193359,4 6,4 C6.27614237,4 6.5,4.23079681 6.5,4.50043583 L6.5,7.5 Z M11,16.3541756 L11,9 L11,3.66666628 L20,1 L20,6.33333372 L12,8.70370375 L12,19 C12,21.209139 10.209139,23 8,23 C5.790861,23 4,21.209139 4,19 C4,16.790861 5.790861,15 8,15 C9.19469253,15 10.2670555,15.5237549 11,16.3541756 Z M12,7.66073133 L19,5.58665755 L19,2.33926867 L12,4.41334245 L12,7.66073133 Z"
                        id="path-1"
                      ></path>
                    </svg>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistTracks;
