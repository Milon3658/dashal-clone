import React from "react";
import { Link } from "react-router-dom";

const CategoryTile = ({ item }) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="mb-2 h-[460px] w-full lg:w-[470px] lg:h-[600px] flex items-end justify-center"
      >
        <div className="flex flex-col items-center">
          <h1 className=" mb-5 text-white font-bold text-5xl">{item.title}</h1>
          <Link to="/allproducts">
            <div className="cursor-pointer mb-5 h-[50px] w-[200px] bg-[#9B101F] hover:bg-red-700 text-white flex items-center justify-center">
              VIEW PRODUCTS
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryTile;
