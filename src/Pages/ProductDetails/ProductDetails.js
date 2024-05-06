import React, { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import prod from "../../assets/proddetails.jpeg";
import redsharee from "../../assets/redsharee.jpeg";
import purplesharee from "../../assets/purplesharee.jpeg";
import jew from "../../assets/jew.png";
import kids from "../../assets/kid.jpg";
import bag from "../../assets/bag.jpeg";
import SingleProduct from "../../Components/AllProducts/SingleProduct";

const ProductDetails = () => {
  const [count, setcount] = useState(1);
  const recentData = [
    {
      id: 1,
      title: "Red Sharee",
      img: redsharee,
      price: 1000,
    },
    {
      id: 2,
      title: "Purple Sharee",
      img: purplesharee,
      price: 2000,
    },
    {
      id: 3,
      title: "Jewellery",
      img: jew,
      price: 3000,
    },
    {
      id: 4,
      title: "Kids Dress",
      img: kids,
      price: 4000,
    },
    {
      id: 5,
      title: "Bag",
      img: bag,
      price: 5000,
    },
  ];
  return (
    <div className="mx-0 lg:mx-10 my-3 lg:my-4">
      <div className="card lg:card-side bg-base-100 shadow-xl my-5">
        <figure>
          <img
            className="w-[370px] h-[470px] lg:h-[700px] lg:w-[600px] object-cover cursor-pointer"
            src={prod}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title font-extrabold text-2xl mb-0 lg:mb-4">
              New Sharee
            </h2>
            <div className="text-lg font-bold text-red-700 flex flex-row mb-0 lg:mb-2">
              <span className="me-2">৳ 5000</span>
              <span className="text-sm">***7.5% vat inclusive</span>
            </div>
            <div className="flex flex-row items-center hover:text-red-700 mb-0 lg:mb-2">
              <span className="text-xl me-2">SKU: 110955</span>
              <FaRegCopy className="text-xl cursor-pointer" />
            </div>
            <p className="text-xl mb-0 lg:mb-4">Color: Light Grey</p>
            {/*  add to cart and buy now buttons */}
            <div className="flex flex-col lg:flex lg:flex-row lg:justify-between">
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
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-wide mx-0 lg:mx-2 my-2 lg:my-0 bg-red-700 hover:bg-red-800 text-white">
                ADD TO CART
              </button>
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-wide bg-yellow-600 hover:bg-yellow-700 text-white">
                BUY NOW
              </button>
            </div>
            {/*  add to cart and buy now buttons END */}

            {/* check availability */}
            <div className="flex flex-row my-0 lg:my-3">
              <button className="btn bg-white hover:bg-[#333333] me-1 lg:me-3 text-2xl hover:text-white">
                <MdFavoriteBorder className="" />
              </button>
              <div className="w-full">
                <button className="btn btn-block hover:bg-[#333333] bg-white hover:text-white uppercase">
                  Check in-Store Availability
                </button>
              </div>
            </div>
            {/* check availability  END  */}
            <span className=" text-xs flex justify-center">
              *Product color may slightly vary, depending on your devices's
              screen resolution
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-extrabold uppercase text-red-700 mt-0 lg:mt-10">
              product details
            </h1>
            <div>
              <p>Product Name : New sharee</p>
              <p>Designer : Afsana</p>
              <p>Fabric : Cotton</p>
              <p>Sharee length : 7 yerds</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <hr />
      <h1 className=" uppercase text-2xl font-bold my-5">Recent products</h1>
      <div className=" mx-2 my-2 grid grid-cols-1 lg:grid lg:grid-cols-4 gap-2">
        {recentData.map((item) => (
          <SingleProduct key={item.id} item={item}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
