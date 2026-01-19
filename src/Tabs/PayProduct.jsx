import React, { useState } from "react";
import Vector from "../assets/image/Vector.svg";
import { BsCreditCardFill } from "react-icons/bs";

 export default function PayProduct ()  {
  const [tab, setTab] = useState(false);
  return (
    <div className="bg-[#252836] overflow-hidden">
      <div className="mb-6 pb-6">
        <h1 className="text-white text-[28px] font-semibold text translate-x-10 ">
          Payment
        </h1>
        <p className="text-[#ABBBC2] font-medium">3 payment method available</p>
      </div>
      <div>
        <h2 className="text-white font-semibold text-5 mb-4">Payment Method</h2>
        <div className=" flex  w-full justify-between items-center gap-2">
          <div
            onClick={() => setTab(!tab)}
            className="relative top-0 left-0 bg-[#1F1D2B] rounded-md text-center flex flex-col items-center py-[10px] w-[100px] cursor-pointer"
          >
            {tab && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`lucide lucide-circle-check-icon lucide-circle-check absolute top-1 right-1 ${tab ? "text-[#EA7C69]" : "text-[#ABBBC2]"}`}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            )}
            <div className="mb-[2px]">
              <BsCreditCardFill
                className={`w-5 h-5 ${tab ? "text-white" : "text-[#ABBBC2]"}`}
              />
            </div>
            <p className={`${tab ? "text-white" : "text-[#ABBBC2]"}`}>
              Credit Card
            </p>
          </div>
          <div className="bg-[#1F1D2B] rounded-md text-center flex flex-col items-center py-[10px] w-25">
            <div className="">
              <img src={Vector} alt="Vector" />
            </div>
            <p>Paypald</p>
          </div>
          <div className="bg-[#1F1D2B] rounded-md text-center flex flex-col items-center py-[10px] w-25">
            <div className="mb-[2px]">
              <img src={Vector} alt="Vector" />
            </div>
            <p>Paypal</p>
          </div>
        </div>
      </div>
      <div className="mt-4 mb-6">
        <p className="text-white font-medium mb-2 text-[14px]">
          Cardholder Name
        </p>
        <input
          type="text"
          placeholder="Levi Ackerman"
          className="py-[14px] pl-[14px] rounded-md bg-[#393C49] w-full font-normal text-[#E0E6E9] border-[#393C49] text-[14px]"
        />
        <div className="mt-4">
          <p className="text-white font-medium mb-2 text-[14px]">Card Number</p>
          <input
            type="text"
            placeholder="2564 1421 0897 1244"
            className="py-[14px] pl-[14px] rounded-md bg-[#393C49] w-full font-normal text-[#E0E6E9] border-[#393C49] text-[14px]"
          />
        </div>
      </div>
      <div>
        <div className="flex w-full justify-between gap-6 mb-7">
          <div className=" ">
            <p className="text-white font-medium mb-2 text-[14px]">
              Expiration Date
            </p>
            <input
              type="text"
              placeholder="02/2022"
              className="py-[14px] pl-[14px] rounded-md bg-[#393C49] w-full font-normal text-[#E0E6E9] border-[#393C49] text-[14px]"
            />
          </div>
          <div>
            <div>
              <p className="text-white font-medium mb-2 text-[14px]">CVV</p>
              <input
                type="text"
                placeholder="02/2022"
                className="py-[14px] pl-[14px] rounded-md bg-[#393C49] w-full font-normal text-[#E0E6E9] border-[#393C49] text-[14px]"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between gap-6">
          <div className=" ">
            <p className="text-white font-medium mb-2 text-[14px]">
              Order Type
            </p>
            <input
              type="text"
              placeholder="02/2022"
              className="py-[14px] pl-[14px] rounded-md bg-[#393C49] w-full font-normal text-[#E0E6E9] border-[#393C49] text-[14px]"
            />
          </div>
          <div>
            <div>
              <p className="text-white font-medium mb-2 text-[14px]">
                Table no.
              </p>
              <input
                type="text"
                placeholder="140"
                className="py-[14px] pl-[14px] rounded-md bg-[#393C49] w-full font-normal text-[#E0E6E9] border-[#393C49] text-[14px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full gap-10 mt-[180px]">
        <button className="text-[#EA7C69] border-[#EA7C69] rounded-md hover:text-white hover:border-[white] hover:bg-[#EA7C69] text-[14px] py-[14px] px-[45px] border-[#EA7C69] border hover:border-none font-semibold duration-300">
          Cancel
        </button>
        <button className="text-[#EA7C69] border-[#EA7C69] hover:text-white hover:border-[white] hover:bg-[#EA7C69] px-[15px] text-[14px] rounded-md border-[#EA7C69] border hover:border-none font-semibold duration-300">
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

;
