import React, { useEffect, useState } from "react";

//redux
import { setTrack, selectTrack } from "../../../../app/slice/hotTracks";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";

const rowTracks = [
  {
    id: 1,
    value: "Saaren",
    label: "Asghar Agha",
    pValue: "سارن",
    pLabel: "اصغر آقا",
    likes: "20,135",
    musicUrl:
      "https://dl.myahang.top/Album/1400/08/Saaren/128/Saaren%20-%2002%20Asghar%20Agha%20%28128%29.mp3",
    iconUrl:
      "https://assets.rjassets.com/static/mp3/saaren-asghar-agha/558fc655aef395a.jpg",
    timeStart: "0:25",
    timeEnd: "3:56",
    Plays: " 9,235,094",
    Date: "Oct 28, 2021",
    Music: "Saaren",
    Lyrics: " Saaren",
    Arrangement: "Peyman Anvaripour",
    Mastering: " Ehsan Javadi",
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
        value: "Saaren",
        label: "Bezan Boro",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/saaren-beza-boro/8f1c9f7b8d00d2e-thumb.jpg",
      },
      {
        id: 3,
        value: "Saaren",
        label: "Az Yadam Mire",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/saaren-beza-boro/8f1c9f7b8d00d2e-thumb.jpg",
      },
      {
        id: 4,
        value: "Saaren",
        label: "Daram Miram",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/saaren-beza-boro/8f1c9f7b8d00d2e-thumb.jpg",
      },
      {
        id: 5,
        value: "Saaren",
        label: " Yadet Mioftam",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/saaren-beza-boro/8f1c9f7b8d00d2e-thumb.jpg",
      },
    ],
  },
  {
    id: 2,
    value: "Shadmehr Aghili",
    label: "Daste Man Niste",
    pValue: "شادمهر",
    pLabel: "دست من نیست",
    likes: "30,15",
    musicUrl:
      "https://dl.music-ava.com/Music/1400/08/01/Shadmehr%20Aghili%20-%20Daste%20Man%20Nist%20[128].mp3",
    iconUrl:
      "https://assets.rjassets.com/static/mp3/shadmehr-aghili-daste-man-nist/52fbbf01742ce4f.jpg",
    timeStart: "0:25",
    timeEnd: "3:40",
    Plays: " 18,205,094",
    Date: "Oct 28, 2021",
    Music: "Shadmehr Aghili",
    Lyrics: " Shadmehr Aghili",
    Arrangement: "Peyman Anvaripour",
    Mastering: " Ehsan Javadi",
    playlist: [
      {
        id: 1,
        value: "Shadmehr Aghili",
        label: "Dastem Man Nist",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/shadmehr-aghili-daste-man-nist/52fbbf01742ce4f-thumb.jpg",
      },
      {
        id: 2,
        value: "Shadmehr Aghili",
        label: "Jange Delam",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/shadmehr-aghili-jange-delam/507fffa95687e04-thumb.jpg",
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
        value: "Shadmehr Aghili",
        label: "Baron Delam Khast",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/shadmehr-aghili-baroon-delam-khast/2a449b8099a18de-thumb.jpg",
      },
      {
        id: 5,
        value: "Shadmehr Aghili",
        label: " Mitarsam",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/shadmehr-aghili-mitarsam/054cd121faf0d42-thumb.jpg",
      },
    ],
  },
  {
    id: 3,
    value: "Anita",
    label: "Shooresho Daravordi",
    pValue: "آنیتا",
    pLabel: "شورشو در آوردی",
    likes: "15,105",
    musicUrl:
      "https://dl.myahang.top/Music/1400/08/A/128/Anita%20-%20Shooresho%20Daravordi%20%28128%29.mp3",
    iconUrl:
      "https://assets.rjassets.com/static/mp3/anita-shooresho-daravordi/cea64d66f7955a3.jpg",
    timeStart: "0:25",
    timeEnd: "2:56",
    Plays: " 4,235,094",
    Date: "Oct 28, 2021",
    Music: "Anita",
    Lyrics: " Anita",
    Arrangement: "Peyman Anvaripour",
    Mastering: " Ehsan Javadi",
    playlist: [
      {
        id: 1,
        value: "Anita",
        label: "Shooresho Daravordi",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/anita-shooresho-daravordi/cea64d66f7955a3-thumb.jpg",
      },
      {
        id: 2,
        value: "Anita",
        label: "Joorvajoor",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/anita-joorvajoor/647cfb7c195ba28-thumb.jpg",
      },
      {
        id: 3,
        value: "Anita",
        label: "To Faghat Boro",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/anita-to-faghat-boro/cbfa6e40e44dd02-thumb.jpg",
      },
      {
        id: 4,
        value: "Anita",
        label: "Male Man",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/anita-male-man/acdebb3e4c481a9-thumb.jpg",
      },
      {
        id: 5,
        value: "Anita",
        label: "Joorvajoor remix",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/anita-joorvajoor-(deejay-al-remix)/7752af89b0fddc6-thumb.jpg",
      },
    ],
  },
  {
    id: 4,
    value: "Soohrab Pakzad",
    label: "Shookhi Nadaram (Ft Asef Aria)",
    pValue: "سهراب پاکزاد",
    pLabel: "شوخی ندارم آصف آریا ",
    likes: "5,135",
    musicUrl:
      "https://dls.music-fa.com/tagdl/ali/Asef%20Aria%20Ft%20Sohrab%20Pakzad%20-%20Shookhi%20Nadaram%20(320).mp3",
    iconUrl:
      "https://assets.rjassets.com/static/mp3/sohrab-pakzad-shookhi-nadaram-(ft-asef-aria)/ed727faafea9a36.jpg",
    timeStart: "0:25",
    timeEnd: "2:48",
    Plays: " 2,235,094",
    Date: "Oct 28, 2021",
    Music: "Soohrab Pakzad",
    Lyrics: " Soohrab Pakzad",
    Arrangement: "Peyman Anvaripour",
    Mastering: " Ehsan Javadi",
    playlist: [
      {
        id: 1,
        value: "Soohrab Pakzad",
        label: "Asghar Agha",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/sohrab-pakzad-shookhi-nadaram-(ft-asef-aria)/ed727faafea9a36-thumb.jpg",
      },
      {
        id: 2,
        value: "Asef Aria",
        label: "Hiss",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/asef-aria-hiss/25b97e2d9975b54-thumb.jpg",
      },
      {
        id: 3,
        value: "Asef Aria",
        label: "Hale Delam",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/asef-aria-hale-delam/fb6f45de533df4e-thumb.jpg",
      },
      {
        id: 4,
        value: "Asef Aria",
        label: "Negaranetam",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/asef-aria-negaranetam/f8de156ef5608f1-thumb.jpg",
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
    value: "Masood Sadeghlo",
    label: "Hala Hala Ha",
    pValue: "مسعود صادقلو",
    pLabel: " حالا حالا ها",
    likes: "10,135",
    musicUrl:
      "https://dl.music-ava.com/Music/1400/08/26/Masoud Sadeghloo - Hala Hala Ha [128].mp3",
    iconUrl:
      "https://assets.rjassets.com/static/mp3/masoud-sadeghloo-hala-hala-ha/1148f4fead3a08c.jpg",
    timeStart: "0:25",
    timeEnd: "2:56",
    Plays: " 15,235,094",
    Date: "Oct 28, 2021",
    Music: "Masood Sadeghlo",
    Lyrics: " Masood Sadeghlo",
    Arrangement: "Peyman Anvaripour",
    Mastering: " Ehsan Javadi",
    playlist: [
      {
        id: 1,
        value: "Masood Sadeghlo",
        label: "Asghar Agha",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/masoud-sadeghloo-hala-hala-ha/1148f4fead3a08c-thumb.jpg",
      },
      {
        id: 2,
        value: "Masood Sadeghlo",
        label: "Zade Baron",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/masoud-sadeghloo-zade-baroon/7c0e8aa8d1fc3f6-thumb.jpg",
      },
      {
        id: 3,
        value: "Masood Sadeghlo",
        label: "Mosaken",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/masoud-sadeghloo-mosaken/969cff082a0baae-thumb.jpg",
      },
      {
        id: 4,
        value: "Masood Sadeghlo",
        label: "Shabahangi",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/masoud-sadeghloo-shabahangi/b5dccf46f64031b-thumb.jpg",
      },
      {
        id: 5,
        value: "Masood Sadeghlo",
        label: "Havye Del",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/reza-bahram-havaye-del/2ef613476de9c1e-thumb.jpg",
      },
    ],
  },
  {
    id: 6,
    value: "TM Bax",
    label: "Cha Cha",
    pValue: "تی ام بکس",
    pLabel: "چه چه",
    likes: "2,135",
    musicUrl: "https://dl.cactusmusic.ir/2021/10/ChaCha.mp3",
    iconUrl:
      "https://assets.rjassets.com/static/mp3/tm-bax-cha-cha/55a7c8d35708b3c.jpg",
    timeStart: "0:25",
    timeEnd: "1:56",
    Plays: " 2,235,094",
    Date: "Oct 28, 2021",
    Music: "TM Bax",
    Lyrics: " TM Bax",
    Arrangement: "Peyman Anvaripour",
    Mastering: " Ehsan Javadi",
    playlist: [
      {
        id: 1,
        value: "TM Bax",
        label: "Cha Cha",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/tm-bax-cha-cha/55a7c8d35708b3c-thumb.jpg",
      },
      {
        id: 2,
        value: "TM Bax",
        label: "Avazia",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/tm-bax-avazia/4a5e34b95988d32-thumb.jpg",
      },
      {
        id: 3,
        value: "TM Bax",
        label: "Mi Corazon",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/tm-bax-sharlene-mi-corazon/2a6a60a424912c0-thumb.jpg",
      },
      {
        id: 4,
        value: "TM Bax",
        label: "Meshki Lebas",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/tm-bax-meshki-lebas-(deejay-al-remix)/e84af8e9a54a451-thumb.jpg",
      },
      {
        id: 5,
        value: "TM Bax",
        label: "Shabhaye Tehroon",
        iconUrl:
          "https://assets.rjassets.com/static/mp3/tm-bax-shabhaye-tehroon-(ft-afx)/f5c0e08df5edf40-thumb.jpg",
      },
    ],
  },
];

function Traks() {
  const [details, setDetails] = useState(false);
  const dispatch = useAppDispatch();
  const tracks = useAppSelector(selectTrack);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black  z-10 overflow-hidden py-[100px] flex flex-col items-start px-[30px]">
      <div className="mx-auto container w-full h-[30px]  px-[10px]">
        <div className="w-full h-full border-t border-b  px-[10px] flex items-center">
          <div
            onClick={() => dispatch(setTrack(null))}
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
              src={rowTracks.find((track: any) => track.id == tracks).iconUrl}
            />
            <div className="h-full flex flex-col justify-center  text-white text-[20px]">
              <div className="h-full flex flex-col justify-center  text-white text-[20px]">
                <span className="text-[#e0e0e0]">
                  {rowTracks.find((track: any) => track.id == tracks).value}
                </span>
                <span>
                  {rowTracks.find((track: any) => track.id == tracks).label}
                </span>
              </div>

              <div className="h-full flex flex-col justify-center  text-white text-[20px]">
                <span className="text-[#e0e0e0]">
                  {rowTracks.find((track: any) => track.id == tracks).pValue}
                </span>
                <span>
                  {rowTracks.find((track: any) => track.id == tracks).pLabel}
                </span>
              </div>
            </div>
          </div>
          <div className="text-white font-medium text-[20px]">
            &#9829;
            {` ${
              rowTracks.find((track: any) => track.id == tracks).likes
            } likes `}
          </div>
          {/* <div className="w-full flex flex-row justify-center items-center gap-[10px] ">
            <span className="text-white">
              {rowTracks.find((track: any) => track.id == tracks).timeStart}
            </span>
            <div className="w-4/12 h-[5px] bg-gray-300 flex items-center">
              <div
                className={`w-[10%] h-[5px] flex items-center justify-end bg-red-600 `}
              >
                <div className="w-[15px] h-[15px] rounded-full bg-gray-100"></div>
              </div>
            </div>
            <span className="text-white">
              {rowTracks.find((track: any) => track.id == tracks).timeEnd}
            </span>
          </div> */}
          <div className="my-[10px] w-6/12  h-[50px] flex justify-center items-center  font-medium text-white ">
            <audio
              controls
              className="w-full h-full "
              preload="none"
              src={rowTracks.find((track: any) => track.id == tracks).musicUrl}
            >
              music
            </audio>
          </div>
          <div
            onClick={() => setDetails(!details)}
            className={`w-6/12  h-[40px] flex justify-center items-center bg-[#363636] opacity-80 font-medium text-white hover:bg-[#555555] cursor-pointer ${
              details ? "rounded-t-lg" : "rounded-lg"
            }`}
          >
            Details
          </div>
          <div
            className={`w-6/12 duration-700 bg-[#333333] opacity-60 rounded-b-lg flex flex-col items-center text-white  overflow-hidden ${
              details ? "h-[165px]" : "h-0"
            } `}
          >
            <span>
              {`Plays:  ${
                rowTracks.find((track: any) => track.id == tracks).Plays
              }`}
            </span>
            <span>
              {`Date: ${
                rowTracks.find((track: any) => track.id == tracks).Date
              }`}
            </span>
            <span>
              {`Music: ${
                rowTracks.find((track: any) => track.id == tracks).Music
              }`}
            </span>
            <span>
              {`Lyrics: ${
                rowTracks.find((track: any) => track.id == tracks).Lyrics
              }`}
            </span>
            <span>
              {`Arrangement: ${
                rowTracks.find((track: any) => track.id == tracks).Arrangement
              }`}
            </span>
            <span>
              {`Mastering: ${
                rowTracks.find((track: any) => track.id == tracks).Mastering
              }`}
            </span>
          </div>
        </div>

        <div className=" w-3/12">
          <div className="mt-[10px] flex flex-col ">
            {rowTracks
              .find((track: any) => track.id == tracks)
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
                    <div className=" w-5/12 h-[2px] bg-white"></div>

                    <div className="absolute w-5/12 h-[2px] bg-white rotate-90"></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Traks;
