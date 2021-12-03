import React from "react";
const rowPopularArtists = [
  {
    id: 0,
    value: "Kimia",
    label: "EP 129 - November 2021",
    iconUrl:
      "https://assets.rjassets.com/static/artists/photos/kimia-35dec4984d7f242-photo.jpg",
  },
  {
    id: 1,
    value: "Haman",
    label: "G-Wagon (Ft Gdaal)",
    iconUrl:
      "https://assets.rjassets.com/static/artists/photos/hoomaan-da2a0db9bfdacaa-photo.jpg",
  },
  {
    id: 2,
    value: "Mehdi Jahani",
    label: "Ghermez",

    iconUrl:
      "https://assets.rjassets.com/static/artists/photos/mehdi-jahani-228bf378e16235a-photo.jpg",
  },
  {
    id: 3,
    value: "Babak Jahanbakhsh",
    label: "Az Ghasd",
    iconUrl:
      "https://assets.rjassets.com/static/artists/photos/babak-jahanbakhsh-d05be4a465eae72-photo.jpg",
  },
  {
    id: 4,
    value: "EpiCure",
    label: "Bezan Baran (Live)",
    iconUrl:
      "https://assets.rjassets.com/static/artists/photos/epicure-3c5cbdcb1b40b17-photo.jpg",
  },
  {
    id: 5,
    value: "Hamid Sefat",
    label: "Daste Man Nist",
    iconUrl:
      "https://assets.rjassets.com/static/artists/photos/hamid-sefat-5ccebbda4d99faa-photo.jpg",
  },
];

function PopularArtists() {
  return (
    <div className="w-full flex flex-col gap-[30px]">
      <div className="w-full flex justify-center text-[20px] text-white px-[20px] ">
        <div className="w-full flex flex-row justify-between ">
          <div className="text-[30px]">Popular Artists </div>
        </div>
      </div>
      <div className="w-full flex justify-between px-[20px]  ">
        {rowPopularArtists.map((playlists: any) => {
          return (
            <div key={playlists.id}>
              <div className="relative w-10/12 flex flex-col justify-center items-center hover:scale-105 duration-500 hover:opacity-100 opacity-80 cursor-pointer ">
                <img
                  className="rounded-full border border-gray-800"
                  src={playlists.iconUrl}
                />
                <div className="px-[10px] w-full flex justify-center text-white  text-center ">
                  {playlists.value}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PopularArtists;
