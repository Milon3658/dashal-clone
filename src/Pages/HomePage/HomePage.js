import React from "react";
import MyCarouselSlider from "../../Components/HomePage/MyCarouselSlider";
import CategoryCard from "../../Components/HomePage/CategoryCard";
import Accessories from "../../Components/HomePage/Accessories";
import HomeDecor from "../../Components/HomePage/HomeDecor";
import SecondCarousel from "../../Components/HomePage/SecondCarousel";

const HomePage = () => {
  return (
    <div className="min-h-screen">
    
      <MyCarouselSlider></MyCarouselSlider>

      <CategoryCard></CategoryCard>

      <Accessories></Accessories>

      <HomeDecor></HomeDecor>

      <SecondCarousel></SecondCarousel>
    </div>
  );
};

export default HomePage;
