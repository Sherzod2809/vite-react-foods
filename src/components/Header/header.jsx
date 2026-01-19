import React from "react";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center ">
      <div className="w-full  flex justify-between items-center  mb-[32px] ">
        <div>
          <h1 className="text-3xl text-white mt-[35px] font-semibold">
            Jaegar Resto
          </h1>
          <p className="text-[#E0E6E9] pt-2 font-normal">Tuesday, 2 Feb 2021</p>
        </div>
     
      </div>
       <div className="flex h-15 justify-end items-center w-[400px] bg-[#393C49] rounded-md pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search-icon lucide-search text-white"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
          <input
            type="search"
            placeholder="Search for food, coffe, etc.."
            className=" bg-[#393C49] py-1.5 w-full rounded-sm text-[#ABBBC2] border-[#ABBBC2] bg-transparent outline-0  py-[15px] pl-5 font-normal"
          />
        </div>
    </div>
  );
};

export default Header;
