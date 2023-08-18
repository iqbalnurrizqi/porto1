import React from "react";
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className="text-white" id="Home">
            <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="uppercase text-[#00df9a] font-bold p-2">Growing With Data Analytics</p>
                <h1 className="xl:text-7xl md:text-5xl sm:text-6xl text-4xl font-bold md:py-6 ">Grow With Data.</h1>
                <div className="flex justify-center items-center">
                    <p className="xl:text-5xl md:text-4xl sm:text-4xl text-xl font-bold py-4">Fast, Flexible Financing For</p>
                    <Typed className="xl:text-5xl md:text-4xl sm:text-4xl text-xl text-[#00df9a] font-bold md:pl-4 pl-2" strings={['BTB', 'BTC', 'SASS' ]} typeSpeed={120} backSpeed={140} loop/> 
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor Your Data Analytics to Increase Revenue For BTB, BTC, & SASS Platforms.</p>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black hover:opacity-75">Get Started</button>
            </div>
        </div>
    )
}

export default Hero