
import button from "../../assets/image/Button.svg";
import { useCart } from "@/store/CartContext";
import NullProduct from "../../Tabs/NullProduct";
import PayProduct from "../../Tabs/PayProduct";
import { useState } from "react";

export default function Backet() {
  const { cart, increment, decrement } = useCart();

  const [payStatus, setPayStatus] = useState(false);

  const handleStatus = () => {
    setPayStatus((prev) => !prev);
  };

  if (cart.length === 0) return <NullProduct />;
  return (
    <div className="bg-[#252836] px-[30px] py-[30px] w-full overflow-y-auto">
      {payStatus ? (
        <PayProduct />
      ) : (
        <div className="w-full text-center  ">
          <div className="flex gap-12 mb-5       ">
            <h3 className="text-white text-[28px] translate-x-10 ">
              Orders #34562
            </h3>
          </div>
          <div className="w-full flex justify-start gap-2.5 mb-5.5">
            <button className="text-[#EA7C69] bg-[#1F1D2B] px-3 py-2 rounded-md hover:bg-[#EA7C69] hover:text-white cursor-pointer">
              Dine In
            </button>
            <button className="text-[#EA7C69] bg-[#1F1D2B] px-3 py-2 rounded-md hover:bg-[#EA7C69] hover:text-white cursor-pointer">
              To Go
            </button>
            <button className="text-[#EA7C69] bg-[#1F1D2B] px-3 py-2 rounded-md hover:bg-[#EA7C69] hover:text-white cursor-pointer">
              Delivery
            </button>
          </div>
          <div className="w-full justify-between flex-col ">
            <div className="w-full flex justify-between mb-[41px] ">
              <p className="text-white">Item</p>
              <div className=" flex w-[35%] jusify-end  gap-6 ">
                <p className="text-white gap-6">Qty</p>
                <p className="text-white">Price</p>
              </div>
            </div>

            {cart.map((item, id) => (
              <div key={id} className=" flex justify-between flex-col w-full ">
                <div className="mb-5 flex justify-beetwen w-full">
                  <div className="w-full flex justify-between gap-10">
                    <div className="aspect-square object-cover rounded-full overflow-hidden w-24">
                      <img src={item.img} alt="Mask" />
                    </div>

                    <p className=" text-[18px] text-[#E0E6E9] text-start font-medium">
                      {item.title}
                    </p>
                  </div>
                </div>

                <div className=" flex justify-between items-center  mb-5">
                  <div className="flex justify-between gap-6  items-center">
                    <button
                      onClick={() => decrement(item.id)}
                      className="bg-[#1F1D2B] py-[5px] px-[5px] rounded-md w-8 text-white"
                    >
                      -
                    </button>
                    <p className="font-medium text-white">{item.quantity}</p>
                    <button
                      onClick={() => increment(item.id)}
                      className="bg-[#1F1D2B] py-[5px] px-[5px] rounded-md w-8 text-white"
                    >
                      +
                    </button>
                  </div>
                  <div className="">
                    <p className="text-white font-medium mb-6">
                      $ {item.price}
                    </p>
                    <p className="text-white font-medium">
                      $ {item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between gap-6">
              <button className="bg-[#2D303E] text-[#E0E6E9] text-[14px] w-full flex text-center py-[14px] rounded-md pl-[14px] font-normal">
                Please, just a little bit spicy only.
              </button>
              <img src={button} alt="button" />
            </div>

            <div className="mt-6 mb-4">
              <div className="flex justify-between mb-4">
                <p className="text-[14px] text-[#ABBBC2] font-normal">
                  Discount
                </p>
                <p className="text-white font-medium">$0</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[14px] text-[#ABBBC2] font-normal">
                  Sub total
                </p>
                <p className="text-white font-medium"> $ 21,03</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {payStatus ? (
        ""
      ) : (
        <button
          onClick={() => handleStatus()}
          className="bg-[#EA7C69] text-white text-[14px] font-semibold py-[14px] w-full mt-[80px] rounded-md  "
        >
          Continue to Payment
        </button>
      )}
    </div>
  );
}
