import React from "react";

function Header() {
  return (
    <div className="w-full flex flex-row justify-center  ">
      <div className=" px-[10px] w-1/2 h-full hover:scale-105 hover:opacity-100 opacity-80 duration-700 cursor-pointer">
        <img
          className="rounded-lg"
          src="https://assets.rjassets.com/static/content_items/images/2021/11/30/1c39dd07ebc15ff.jpg"
        />
        <div className="w-full flex flex-col items-start  text-white px-[10px] text-[14px]">
          <span className=" text-gray-300">Satin</span>
          <span>Nabashe Roo Dasted</span>
        </div>
      </div>
      <div className="px-[10px] w-1/2 h-full hover:scale-105 duration-700 hover:opacity-100 opacity-80 cursor-pointer">
        <img
          className="rounded-lg"
          src="https://assets.rjassets.com/static/content_items/images/2021/12/02/3f97684f35868a3.jpg"
        />
        <div className="w-full flex flex-col items-start  text-white px-[10px]  text-[14px]">
          <span className=" text-gray-300">Ramin Bibak</span>
          <span>Piyadeh</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
