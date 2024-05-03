import React from "react";
import MyCarouselSlider from "../../Components/HomePage/MyCarouselSlider";
import CategoryCard from "../../Components/HomePage/CategoryCard";
import Accessories from "../../Components/HomePage/Accessories";
import HomeDecor from "../../Components/HomePage/HomeDecor";
import SecondCarousel from "../../Components/HomePage/SecondCarousel";

const HomePage = () => {
  return (
    <div>
      <div className=" cursor-pointer h-14 hidden lg:flex lg:flex-row lg:justify-center items-center text-lg">
        <h1 className=" mx-5 hover:text-xl hover:font-bold category-trans">
          Women
        </h1>
        <h1 className=" mx-5 hover:text-xl hover:font-bold category-trans">
          Men
        </h1>
        <h1 className=" mx-5 hover:text-xl hover:font-bold category-trans">
          Kid
        </h1>
        <h1 className=" mx-5 hover:text-xl hover:font-bold category-trans">
          Accessories
        </h1>
        <h1 className=" mx-5 hover:text-xl hover:font-bold category-trans">
          Home Decor
        </h1>
        <h1 className=" mx-5 text-red-500 font-semiboldv hover:text-xl hover:font-bold category-trans">
          About Us
        </h1>
        <h1 className=" mx-5 hover:text-xl hover:font-bold category-trans">
          স্ব By Deshal
        </h1>
      </div>
      {/* Carousel Slider start */}

      <MyCarouselSlider></MyCarouselSlider>

      {/* Carousel Slider end */}

      <CategoryCard></CategoryCard>

      <Accessories></Accessories>

      <HomeDecor></HomeDecor>

      <SecondCarousel></SecondCarousel>
    </div>
  );
};

export default HomePage;
