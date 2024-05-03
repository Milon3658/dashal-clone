import React from "react";
import {
  MdFavoriteBorder,
  MdOutlineShoppingCart,
  MdLocationOn,
} from "react-icons/md";
import { IoPersonCircleOutline, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="shadow-lg">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <label htmlFor="my-drawer" className=" lg:mx-4 mx-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>

          <button className="btn btn-ghost btn-circle">
            <Link to="favorite">
              <MdLocationOn className="h-7 w-7" />
            </Link>
          </button>
        </div>
        <div className="navbar-center">
          <Link to="/">
            <img className="h-10 w-14 lg:h-14 lg:w-20 me-5" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <IoSearch className="h-7 w-7" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <Link to="favorite">
              <MdFavoriteBorder className="h-7 w-7" />
            </Link>
          </button>
          <button className="btn btn-ghost btn-circle">
            <Link to="/cart">
              <MdOutlineShoppingCart className="h-7 w-7" />
            </Link>
          </button>
          <button className="btn btn-ghost btn-circle">
            <Link to="/profile">
              <IoPersonCircleOutline className="h-7 w-7" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
