import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import logo from "../assets/logo.png";
import MyModal from "../Components/HomePage/MyModal";
import CategoryList from "../Components/CategoryList";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CategoryList></CategoryList>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side cursor-pointer">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li>
              <Link to="/">
                <img
                  className="h-10 w-14 lg:h-14 lg:w-20 me-5"
                  src={logo}
                  alt=""
                />
              </Link>
            </li>
            <li>
              <h1 className=" mx-5">Women</h1>
              <h1 className=" mx-5">Men</h1>
              <h1 className=" mx-5">Kid</h1>
              <h1 className=" mx-5">Accessories</h1>
              <h1 className=" mx-5">Home Decor</h1>
              <h1 className=" mx-5 text-red-500 font-semibold">About Us</h1>
              <h1 className=" mx-5">স্ব By Deshal</h1>
            </li>
          </ul>
        </div>
      </div>

      <MyModal></MyModal>

      <Footer></Footer>
    </div>
  );
};
export default Layout;
