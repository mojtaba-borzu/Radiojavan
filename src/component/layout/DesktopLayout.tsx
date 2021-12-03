import React from "react";

function music({ children }: { children: any }) {
  return (
    <div className=" w-full h-screen flex flex-col  items-start bg-black">
      <div className="py-[10px] px-[10px]  w-full h-[70px] flex justify-center items-center   ">
        <div className="  w-full h-full flex justify-center border border-gray-500 text-[50px] text-white rounded-lg">
          header
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default music;
