import React from "react";
import {
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-6 grid lg:grid-cols-3 gap-8 text-gray-300" id="contact">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
          distinctio architecto natus sint mollitia magnam exercitationem
          recusandae. Architecto, labore sit?
        </p>
        <div className="flex md:w-[75%] my-6 justify-between">
          <FaFacebookSquare size={30} className="hover:scale-110 cursor-pointer" />
          <FaInstagram size={30} className="hover:scale-110 cursor-pointer"/>
          <FaTiktok size={30} className="hover:scale-110 cursor-pointer"/>
          <FaTwitter size={30} className="hover:scale-110 cursor-pointer"/>
          <FaLinkedin size={30} className="hover:scale-110 cursor-pointer"/>
          <FaGithub size={30} className="hover:scale-110 cursor-pointer"/>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400 border-b cursor-pointer hover:text-gray-200">Solution</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">E-Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
      

      <div>
        <h6 className="font-medium text-gray-400 border-b cursor-pointer hover:text-gray-200 ">Support</h6>
        <ul>
          <li className="py-2 text-sm">Analytics</li>
          <li className="py-2 text-sm">Marketing</li>
          <li className="py-2 text-sm">E-Commerce</li>
          <li className="py-2 text-sm">Insights</li>
        </ul>
      </div>

      <div>
        <h6 className="font-medium text-gray-400 border-b cursor-pointer hover:text-gray-200">Company</h6>
        <ul>
          <li className="py-2 text-sm">About</li>
          <li className="py-2 text-sm">Blog</li>
          <li className="py-2 text-sm">Jobs</li>
          <li className="py-2 text-sm">Press</li>
          <li className="py-2 text-sm">Careers</li>
        </ul>
      </div>

      <div>
        <h6 className="font-medium text-gray-400 border-b cursor-pointer hover:text-gray-200">Legal</h6>
        <ul>
          <li className="py-2 text-sm">Claim</li>
          <li className="py-2 text-sm">Policy</li>
          <li className="py-2 text-sm">Terms</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Footer;
