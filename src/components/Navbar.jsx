import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { LuPhoneCall } from "react-icons/lu";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ bgColor }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showSidebar, setSidebar] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      // Only hide navbar if sidebar is NOT open
      if (!showSidebar) {
        setShowNavbar(false);
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setShowNavbar(true);
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [showSidebar]);

  return (
    <>
      {/* Wrapper for all main content */}
      <div
        className={`transition-transform duration-300 ${
          showSidebar ? "-translate-x-80" : "translate-x-0"
        }`}
      >
        {/* Navbar */}
        <nav
          className={`
          max-tablet:fixed min-tablet:relative max-tablet:z-51 left-0 w-full py-5 px-6 flex items-center justify-between z-50
          transition-all duration-500 ease-in-out
          ${
            showNavbar
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }
          ${
            bgColor === "green"
              ? "bg-[var(--light-blue)] text-white"
              : "bg-white text-[#222]"
          }
        `}
        >
          <h2 className="font-semibold text-[1.5rem]">Learning</h2>

          {/* Desktop Links */}
          <div className="flex max-tablet:hidden text-[1.15rem] items-center gap-8">
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#ccc5] transition-colors duration-150
              ${isActive ? "text-[#555]/80" : "text-[#fff]"}`
              }
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#ccc5] transition-colors duration-150 ${
                  isActive ? "text-[#555]/80" : "text-[#fff]"
                }`
              }
              to="/aboutus"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#ccc5] transition-colors duration-150 ${
                  isActive ? "text-[#555]/80" : "text-[#fff]"
                }`
              }
              to="/courses"
            >
              Courses
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#ccc5] transition-colors duration-150 ${
                  isActive ? "text-[#555]/80" : "text-[#fff]"
                }`
              }
              to="/Instructors"
            >
              Instructors
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#ccc5] transition-colors duration-150 ${
                  isActive ? "text-[#555]/80" : "text-[#fff]"
                }`
              }
              to="/testimonial"
            >
              Testimonial
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#ccc5] transition-colors duration-150 ${
                  isActive ? "text-[#555]/80" : "text-[#fff]"
                }`
              }
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#ccc5] transition-colors duration-150 ${
                  isActive ? "text-[#555]/80" : "text-[#fff]"
                }`
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </div>

          {/* Desktop Contact */}
          <div className="flex max-tablet:hidden items-center gap-4">
            <LuPhoneCall className="text-[1.055rem] mr-2" />
            <p className="text-[1.05rem]">+243 7016 1275 02</p>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex min-tablet:hidden items-end"
            onClick={() => setSidebar((prev) => !prev)}
            aria-label="Toggle sidebar"
          >
            {showSidebar ? (
              <IoMdClose className="text-[1.5rem]" />
            ) : (
              <IoReorderThreeOutline className="text-[1.5rem]" />
            )}
          </button>
        </nav>
      </div>

      {/* Sidebar — fixed on right */}
      <div
        className={`
        fixed top-0 right-0 w-80 h-full bg-[var(--dark-blue)] z-[60] p-6 min-tablet:z[-1]
        transition-transform duration-300
        ${showSidebar ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex flex-col justify-center text-[1.23rem] h-full pl-2.5 text-white space-y-4">
          {[
            ["Home", "/home"],
            ["About", "/aboutus"],
            ["Courses", "/courses"],
            ["Instructors", "/Instructors"],
            ["Testimonial", "/testimonial"],
            ["Blog", "/blog"],
            ["Contact", "/contact"],
          ].map(([label, path]) => (
            <NavLink
              key={path}
              className="border-b-1 border-[#ccc5] pb-3.5 text-[1.22rem] hover:text-[#ccc5] transition-colors duration-150"
              to={path}
              onClick={() => setSidebar(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
