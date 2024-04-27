import React from "react";
import MyCarouselSlider from "../../Components/HomePage/MyCarouselSlider";
// import men from "../../assets/men.jpg";
// import women from "../../assets/women.jpg";
// import kid from "../../assets/kid.jpg";

const HomePage = () => {
  const women = "https://www.deshal.net/web/women.jpg";
  const Men = "https://www.deshal.net/web/men.jpg";
  const kid = "https://www.deshal.net/web/kid.jpg";
  return (
    <div>
      <div className=" cursor-pointer h-14 hidden lg:flex lg:flex-row lg:justify-center items-center text-lg">
        <h1 className=" mx-5">Women</h1>
        <h1 className=" mx-5">Men</h1>
        <h1 className=" mx-5">Kid</h1>
        <h1 className=" mx-5">Accessories</h1>
        <h1 className=" mx-5">Home Decor</h1>
        <h1 className=" mx-5 text-red-500 font-semibold">About Us</h1>
        <h1 className=" mx-5">স্ব By Deshal</h1>
      </div>
      {/* Carousel Slider start */}

      <MyCarouselSlider></MyCarouselSlider>

      {/* Carousel Slider end */}

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
    </div>
  );
};

export default HomePage;
