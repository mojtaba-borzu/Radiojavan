import React from "react";
const rowFooter = [
  { id: 0, value: "Get RJ Apps" },
  { id: 1, value: "Premium" },
  { id: 2, value: "Contact" },
  { id: 3, value: "Store" },
  { id: 4, value: "Help" },
  { id: 5, value: "Privacy" },
  { id: 6, value: "Policy" },
  { id: 7, value: "Terms" },
  { id: 8, value: "About" },
];

function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[20px]  border-t border-gray-500 py-[30px] ">
      <div className="w-full flex justify-center gap-[20px]">
        {rowFooter.map((footers) => {
          return (
            <button
              className=" text-white hover:text-red-600 font-medium "
              key={footers.id}
            >
              {footers.value}
            </button>
          );
        })}
      </div>
      <div className="w-full flex flex-col items-center justify-center text-gray-700 text-[14px] ">
        <div>© 2021 by Radio Javan. All Rights Reserved.</div>
        <div>
          The largest source of Persian entertainment providing the best Persian
          and Iranian music 24/7
        </div>
      </div>
    </div>
  );
}

export default Footer;
