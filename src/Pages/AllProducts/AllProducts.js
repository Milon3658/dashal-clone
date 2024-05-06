import React from "react";
import SingleProduct from "../../Components/AllProducts/SingleProduct";

const AllProducts = () => {
  return (
    <div className=" mx-2 my-2 grid grid-cols-1 lg:grid lg:grid-cols-4">
     <SingleProduct></SingleProduct>
    </div>
  );
};
export default AllProducts;
