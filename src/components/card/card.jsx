import { useCart } from "@/store/CartContext";

export default function Card({ data }) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col items-center relative top-0 left-0  mt-25 bg-[#1F1D2B] rounded-xl px-9 pb-6 mx-5">
      <img
        className=" -translate-y-12 flex rounded-full"
        src={data.img}
        alt="lagman"
      />
      <div className="text-center w-full px-3">
        <p className="text-white font-medium text-[18px]">{data.title}</p>
        <p className="text-white font-normal text-[18px] ">${data.price}</p>
        <p className="text-gray-500 font-normal">{data.available}</p>
        <button
          className="w-full bg-[#EA7C69] mt-12 py-2 rounded-md font-semibold text-white hover:bg-[#b86050] cursor-pointer transition-all duration-300"
          onClick={() => addToCart(data)}
        >
          Add
        </button>
      </div>
    </div>
  );
}
