import React from "react";

const Newslatter = () => {
  return (
    <div className="w-full py-16 text-white px-4" id="newsLatter">
      <div className="max-w-full ml-20 mr-10 grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="xl:text-5xl md:text-4xl sm:text-4xl text-2xl font-bold py-2">
            Want <span className="text-[#00df9a]">Tips & Tricks</span> to Optimize Your Flow?
          </h1>
          <p>Sign up to our newslatter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input className="p-3 flex w-3/4 xl:w-full md:ml-4 rounded-md text-black" type="Email" placeholder=" Enter Email" />
            <button className="bg-[#00df9a] w-[200px] md:w-[170px] rounded-full font-medium my-6 mx-auto md:ml-4 px-6 py-3 text-black hover:opacity-75">Notify Me</button>
          </div>
          <p>We care bout protection of your data. Read our <span className="text-[#00df9a]">Privacy Policy.</span></p>
        </div>
      </div>
    </div>
  );
};

export default Newslatter;
