import React from "react";

const Accessories = () => {
  const accessories =
    "https://www.deshal.net/images/MainCategories/HomePageAccessoriesCoverPhoto.jpg";

  return (
    <div
      style={{
        backgroundImage: `url(${accessories})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="mx-2 mb-2 h-[460px] w-full lg:h-[600px] flex items-end justify-center"
    >
      <div className="flex flex-col items-center">
        <h1 className=" mb-5 text-white font-bold text-5xl">ACCESSORIES</h1>
        <div className="cursor-pointer mb-5 h-[50px] w-[200px] bg-[#9B101F] hover:bg-red-700 text-white flex items-center justify-center">
          VIEW PRODUCTS
        </div>
      </div>
    </div>
  );
};

export default Accessories;
