import React from "react";
import {
  MdFavoriteBorder,
  MdOutlineShoppingCart,
  MdLocationOn,
} from "react-icons/md";
import { IoPersonCircleOutline, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="overscroll-none">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* <li>
                <Link to="">Homepage</a>
              </li>
              <li>
                <Link to="">Portfolio</a>
              </li>
              <li>
                <Link to="">About</a>
              </li> */}
            </ul>
          </div>
          <button className="btn btn-ghost btn-circle">
            <Link to="favorite">
              <MdLocationOn className="h-5 w-5"/>
            </Link>
          </button>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost text-md lg:text-xl">
            daisyUI
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <IoSearch className="h-5 w-5" />
          </button>
          <button className="btn btn-ghost btn-circle">
            <Link to="favorite">
              <MdFavoriteBorder className="h-5 w-5" />
            </Link>
          </button>
          <button className="btn btn-ghost btn-circle">
            <Link to="/cart">
              <MdOutlineShoppingCart className="h-5 w-5" />
            </Link>
          </button>
          <button className="btn btn-ghost btn-circle">
            <Link to="/profile">
              <IoPersonCircleOutline className="h-5 w-5" />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
