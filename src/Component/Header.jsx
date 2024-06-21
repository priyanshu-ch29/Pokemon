import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" h-[13vh] bg-black flex justify-between items-center">
        <Link to="/">
          <img
            src="https://cdn.pixabay.com/photo/2016/08/17/20/12/pokemon-1601385_1280.jpg"
            alt="logo"
            className=" w-[10em] pt-4 pl-4 "
          />
        </Link>
        <div className=" flex items-center ">
          <h1 className=" text-white text-2xl font-semibold mr-44 max-md:mr-22 max-sm:mr-6">
            Welcome to Pokemon Page
          </h1>
          <img
            src="https://cdn3.emoji.gg/emojis/19820-nickitsit.png"
            alt=""
            className=" w-[5rem] "
          />
        </div>
      </div>
      <h1 className=" text-center text-3xl m-4 p-4 font-semibold text-lime-500">
        Pokemon Cards
      </h1>
    </>
  );
};

export default Header;
