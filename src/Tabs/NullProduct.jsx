import breakfast from "../assets/image/breakfast.png";

export default function NullProduct() {
  return (
    <div>
      <div className="w-full h-screen py-12 px-7">
        <div className="flex w-full flex-col justify-between">
          <h1 className="text-white text-3xl font-semibold ml-2 trans -translate-4 translate-x-10">
            Orders{" "}
          </h1>
          <img src={breakfast} alt="breakfast" className="mt-[110px]" />
        </div>
        <div className="w-full flex flex-col  items-center mt-[36px]">
          <h2 className="text-white mb-[31px] font-semibold text-[24px]">
            No Order
          </h2>
          <p className=" text-[#E0E6E9] font-normal text-[14px]">
            Go find the products you like
          </p>
        </div>
        <a href="/home" className="cursor-pointer">
          <button className="w-full bg-[#EA7C69] font-semibold text-white text-[18px] py-2.5  rounded-md  mt-[174px]">
            To Order
          </button>
        </a>
      </div>
    </div>
  );
}
