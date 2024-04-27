import React from "react";
import MyCarouselSlider from "../../Components/HomePage/MyCarouselSlider";
import CategoryCard from "../../Components/HomePage/CategoryCard";
import Accessories from "../../Components/HomePage/Accessories";
import HomeDecor from "../../Components/HomePage/HomeDecor";
import SecondCarousel from "../../Components/HomePage/SecondCarousel";
// import men from "../../assets/men.jpg";
// import women from "../../assets/women.jpg";
// import kid from "../../assets/kid.jpg";

const HomePage = () => {
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

      <CategoryCard></CategoryCard>

      <Accessories></Accessories>

      <HomeDecor></HomeDecor>

      <SecondCarousel></SecondCarousel>
      
    </div>
  );
};

export default HomePage;
