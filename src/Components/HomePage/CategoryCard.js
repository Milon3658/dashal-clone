import React from 'react';
import Men from '../../assets/men.jpg';
import women from "../../assets/women.jpg";
import kid from "../../assets/kid.jpg";
const CategoryCard = () => {
    return (
        <div className="mx-2 lg:mx-2 flex flex-col lg:flex lg:flex-row lg:justify-between">
        <div
          style={{
            backgroundImage: `url(${women})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="mb-2 h-[460px] w-full lg:w-[470px] lg:h-[600px] flex items-end justify-center"
        >
          <div className="flex flex-col items-center">
            <h1 className=" mb-5 text-white font-bold text-5xl">WOMEN</h1>
            <div className="cursor-pointer mb-5 h-[50px] w-[200px] bg-[#9B101F] hover:bg-red-700 text-white flex items-center justify-center">
              VIEW PRODUCTS
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${Men})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="mb-2 h-[460px] w-full lg:w-[470px] lg:h-[600px] flex items-end justify-center"
        >
          <div className="flex flex-col items-center">
            <h1 className=" mb-5 text-white font-bold text-5xl">MEN</h1>
            <div className="cursor-pointer mb-5 h-[50px] w-[200px] bg-[#9B101F] hover:bg-red-700 text-white flex items-center justify-center">
              VIEW PRODUCTS
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${kid})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="mb-2 h-[460px] w-full lg:w-[470px] lg:h-[600px] flex items-end justify-center"
        >
          <div className="flex flex-col items-center">
            <h1 className=" mb-5 text-white font-bold text-5xl">KIDS</h1>
            <div className="cursor-pointer mb-5 h-[50px] w-[200px] bg-[#9B101F] hover:bg-red-700 text-white flex items-center justify-center">
              VIEW PRODUCTS
            </div>
          </div>
        </div>
      </div>
    );
};

export default CategoryCard;