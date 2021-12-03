import React from "react";
const rowMoreToExplorer = [
  {
    id: 0,
    value: "RJ Countdown ",
    label: "EP 129 - November 2021",
    iconUrl:
      "https://assets.rjassets.com/static/content_items/images/2021/12/02/9d7bfca79dbe71e.jpg",
  },
  {
    id: 1,
    value: "Isam",
    label: "G-Wagon (Ft Gdaal)",
    iconUrl:
      "https://assets.rjassets.com/static/content_items/images/2021/12/02/bb193d9412308ba.jpg",
  },
  {
    id: 2,
    value: "Garsha Rezaei",
    label: "Ghermez",

    iconUrl:
      "https://assets.rjassets.com/static/content_items/images/2021/12/01/b7f6891f3a79380.jpg",
  },
  {
    id: 3,
    value: "Haamim",
    label: "Az Ghasd",
    iconUrl:
      "https://assets.rjassets.com/static/content_items/images/2021/11/30/609562a6604f725.jpg",
  },
  {
    id: 4,
    value: "Ehaam ",
    label: "Bezan Baran (Live)",
    iconUrl:
      "https://assets.rjassets.com/static/content_items/images/2021/11/29/d52209e78a1705c.jpg",
  },
  {
    id: 5,
    value: "Shadmehr Aghili",
    label: "Daste Man Nist",
    iconUrl:
      "https://assets.rjassets.com/static/content_items/images/2021/12/02/a6b9566b95c9c28.jpg",
  },
];

function MoreToExplorer() {
  return (
    <div className="w-full flex flex-col gap-[30px]">
      <div className="w-full flex justify-center text-[20px] text-white px-[20px] ">
        <div className="w-full flex flex-row justify-between ">
          <div className="text-[20px]">More To Explorer </div>
          <div className="flex items-center border border-gray-700 px-[5px] rounded-lg text-[14px] cursor-pointer">
            View More
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between px-[20px]  gap-[10px]">
        {rowMoreToExplorer.slice(0, 3).map((playlists: any) => {
          return (
            <div key={playlists.id}>
              <div className="relative w-8/12 flex flex-col justify-center items-center hover:scale-105 duration-500 hover:opacity-100 opacity-80 cursor-pointer ">
                <img className="rounded-md" src={playlists.iconUrl} />
                <div className="px-[10px] w-full flex justify-start text-white text-[12px]">
                  {playlists.value}
                </div>
                <div className="px-[10px] w-full flex justify-start text-white font-medium text-[12px]">
                  {playlists.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoreToExplorer;
