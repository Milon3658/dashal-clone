import React from "react";
import sharee from "../../assets/sharee.jpeg";
import panjabi from "../../assets/panjabi.jpeg";
import CategoryTile from "../../Components/CategoryTile";
import tshirt from "../../assets/tshirt.jpeg";

const Category = () => {
  const data1 = [
    {
      title: "Sharee",
      image: sharee,
    },
    {
      title: "Panjabi",
      image: panjabi,
    },
    {
        title: "T-Shirt",
        image: tshirt,
    }
  ];
  return (
    <div className="mx-2 lg:mx-2 flex flex-col lg:flex lg:flex-row lg:justify-between min-h-screen">
      {data1.map((item) => (
        <CategoryTile item={item}></CategoryTile>
      ))}
    </div>
  );
};

export default Category;
