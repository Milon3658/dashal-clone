import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartList = () => {
  const [count, setcount] = useState(1);
  const avatar =
    "https://app.deshal.net/storage/9209/conversions/Padmaboti-1-110955-(2)_660bc2ff920f7-thumb.jpg";
  return (
    <div className="mt-1 lg:mt-5 mx-0 lg:mx-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className=" bg-[#E6E5E5]">
            <tr>
              <th className=" text-xl text-black ">PRODUCT NAME</th>
              <th className=" text-xl text-black ">SKU</th>
              <th className=" text-xl text-black ">UNIT PRICE</th>
              <th className=" text-xl text-black ">QTY</th>
              <th className=" text-xl text-black ">TOTAL</th>
              <th className=" text-xl text-black ">REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className=" w-24 h-30">
                    <img src={avatar} alt="Avatar Tailwind CSS Component" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Sharee</div>
                    <div className="text-sm opacity-50">Qty-1</div>
                  </div>
                </div>
              </td>
              <td>
                <span className=" font-bold">120988</span>
              </td>
              <td className=" font-bold">TK : 14000</td>
              <td>
                <div className="flex flex-row ">
                  <button
                    onClick={() => setcount(count > 1 ? count - 1 : 1)}
                    className="btn btn-active"
                  >
                    <FaMinus />
                  </button>
                  <div className="px-5 h-[46px] w-[80px] border rounded-lg mx-1 flex items-center justify-center">
                    {count}
                  </div>
                  <button
                    onClick={() => setcount(count + 1)}
                    className="btn btn-active"
                  >
                    <FaPlus />
                  </button>
                </div>
              </td>
              <td className=" font-bold">TK : 14000</td>
              <td>
                <button className="btn btn-circle btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartList;
