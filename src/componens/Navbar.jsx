import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex fixed justify-center items-center border-b border-gray-600 h-20 w-full bg-[#000300] bg-opacity-90 mx-auto px-6 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-[#00df9a]">
          <a href="#">Home</a>
        </li>
        <li className="p-4 hover:text-[#00df9a]">
          <a href="#">Resources</a>
        </li>
        <li className="p-4 hover:text-[#00df9a]">
          <a href="#">About</a>
        </li>
        <li className="p-4 hover:text-[#00df9a]">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]"><a href="#">Home</a></li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]"><a href="#">Comapany</a></li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]"><a href="#">Resources</a></li>
          <li className="p-4 border-b border-gray-600 hover:text-[#00df9a]"><a href="#">About</a></li>
          <li className="p-4 hover:text-[#00df9a]"><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
