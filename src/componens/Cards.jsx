import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[7rem] px-4 bg-white " id="cards">
      <div className="max-w-[1240px] mx-auto grid md:flex gap-8">
        {/* first Card */}
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
            src={single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold ">$149</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User </p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black hover:opacity-75">Start Trail</button>
        </div>
        {/* second Card */}
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
            src={double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Couple User</h2>
          <p className="text-center text-4xl font-bold ">$149</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User </p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#00df9a] hover:opacity-75">Start Trail</button>
        </div>
        {/* third Card */}
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white bg-transparent"
            src={triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Grup User</h2>
          <p className="text-center text-4xl font-bold ">$149</p>
          <div className="text-center font-medium ">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User </p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black hover:opacity-75">Start Trail</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
