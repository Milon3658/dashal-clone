import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const bgImage = "https://www.deshal.net/common_assets/LoginPage.jpg";

  return (
    <div
      className="flex justify-center items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="card w-96 lg:w-[500px] bg-transparent glass my-5 lg:my-20 p-5">
        <button className="btn btn-block uppercase mb-4">
          <FaFacebook className=" text-blue-600" />
          continue with facebook
        </button>
        <button className="btn btn-block uppercase">
          <FaGoogle className=" " />
          continue with google
        </button>
        <p className="flex justify-center my-0 lg:my-5 font-bold text-white">
          OR
        </p>
        <input
          type="text"
          placeholder="ENTER YOUR PHONE NUMBER"
          className="input input-bordered w-full"
        />
        <button className="btn btn-block uppercase mb-4 bg-red-700 hover:bg-red-800 border-none mt-5 text-white">
          Login
        </button>
        <p className="text-white cursor-pointer">
          Don't have any account ?
          <Link to="/signup"><span className="text-red-700 hover:font-bold ms-2">Create account</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
