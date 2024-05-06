import React from "react";
import Men from "../../assets/men.jpg";
import women from "../../assets/women.jpg";
import kid from "../../assets/kid.jpg";
import CategoryTile from "../CategoryTile";
const CategoryCard = () => {
  const data = [
    {
      title: "MEN",
      image: Men,
    },
    {
      title: "WOMEN",
      image: women,
    },
    {
      title: "KIDS",
      image: kid,
    },
  ];
  return (
    <div className="mx-2 lg:mx-2 flex flex-col lg:flex lg:flex-row lg:justify-between">
      {data.map((item) => (
        <CategoryTile item={item}></CategoryTile>
      ))}
    </div>
  );
};

export default CategoryCard;
