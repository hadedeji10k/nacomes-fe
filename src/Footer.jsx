import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import imag2 from "./assets/hacker.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";

const Footer = () => (
  <footer className="bg-gray-800 text-gray-200">
    {/* Banner */}
    <div
      className="bg-blue-600 text-white text-2xl text-center py-5 px-3 
    -mt-8 mr-48 mb-10 ml-48 rounded-md shadow-[0px_3px_5px_black] flex gap-[3rem] items-center justify-center"
    >
      <div className="[text-shadow:-2px_1px_2px_black] ">Have you paid your dues?</div>
      <div className="bg-blue-950 text-base p-4 font-bold rounded-full flex items-center justify-center text-white gap-[17px] pr-[30px] pl-[30px]
      shadow-[0px_3px_3px_black] hover:scale-105 transform transition">
        <div>Click here to pay</div>
        <div className="text-3xl">
          <CiLocationArrow1 />
        </div>
      </div>
    </div>

    {/* Main Footer Content */}
    <div className="container mx-auto px-4 py-6 flex justify-between pl-[84px] mr-[-28px] pr-[25px]">
      <div className="">
        {/* Column 1: About or Logo */}
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0 mt-[-40px]">
          <img src={imag2} alt="hacker" className="w-20 mb-2" />
          <p className="text-sm">
            The National Association of Computer Engineering Students (NACOMES)
            is the Head Student body for students studying Computer Engineering
            in the University of Maiduguri.
          </p>
        </div>
      </div>

      <div className="flex mr-[13rem] gap-[88px]">
        {/* Column 2: Quick Links */}
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
          <h4 className="font-bold text-2xl mb-[1rem]">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact or Newsletter */}
        <div className="w-full sm:w-1/3">
          <h4 className="font-bold text-2xl mb-[1rem]">Contact</h4>
          <ul className="text-sm space-y-1">
            <li>Email: support@crafto.com</li>
            <li>Phone: +123-456-7890</li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
          <h4 className="font-bold text-2xl mb-[1rem]">Follow Us</h4>
          <ul className="flex space-x-4 text-sm">
            <li>
              <a href="#" className="hover:underline">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="bg-gray-900 text-gray-400 text-center text-xs py-3">
      © {new Date().getFullYear()} NACOMES – All rights reserved.
    </div>
  </footer>
);

export default Footer;
