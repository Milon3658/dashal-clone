import React from "react";
import SingleProduct from "../../Components/AllProducts/SingleProduct";
import redsharee from "../../assets/redsharee.jpeg";
import purplesharee from "../../assets/purplesharee.jpeg";
import jew from "../../assets/jew.png";
import kids from "../../assets/kid.jpg";
import bag from "../../assets/bag.jpeg";

const AllProducts = () => {
  const data2 = [
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
    <div className="min-h-screen">
      <div className="py-4 text-5xl flex flex-row justify-center items-center text-red-700 font-bold bg-[#D8DBDF]">
        <h1>
          WOMEN
        </h1>
      </div>
      <div className=" mx-2 my-2 grid grid-cols-1 lg:grid lg:grid-cols-4 gap-2">
        {data2.map((item) => (
          <SingleProduct key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default AllProducts;
