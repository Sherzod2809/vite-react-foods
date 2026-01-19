import React from "react";

export default function Profil ()  {
  return (
    <div className="py-[30px] bg-[#252836] px-[30px] overflow-hidden">
      <p className="text-white font-semibold text-[28px] translate-x-1/8 mb-8">
        Profil
      </p>
      <div className="bg-[#1F1D2B] pt-[25px] pb-[28px] pr-[28px] rounded-md mb-8">
        <div className="flex items-center">
          <p className="outline-none bg-[#252836] text-[45px] text-white font-medium text-[45px] w-[80px] h-[80px] rounded-full border-2 text-center border-[#252836] mx-3">
            D
          </p>
          <p className="text-white font-semibold text-[28px]">Denis</p>
        </div>
        <div className="flex justify-end mt-[11px]">
          <button className="text-[#EA7C69] font-semibold">Edit profile</button>
        </div>
      </div>
      <div className="flex py-8 pl-[17px] gap-[25px] bg-[#EA7C6942] rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-clock4-icon lucide-clock-4 text-white "
        >
          <path d="M12 6v6l4 2" />
          <circle cx="12" cy="12" r="10" />
        </svg>
        <p className="text-white font-medium">Order history</p>
      </div>
    </div>
  );
};
