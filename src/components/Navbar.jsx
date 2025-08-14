import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { LuPhoneCall } from "react-icons/lu";
import { IoReorderThreeOutline, IoClose } from "react-icons/io5";

const Navbar = ({ bgColor, textColor }) => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (showSidebar) {
        setShowNav(true);
        return;
      }

      if (currentScrollY > lastScrollY) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setShowNav(true);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, showSidebar]);

  return (
    <div className="relative flex transition-all duration-300 ease-in-out">
      <nav
        className={`fixed left-0 w-full py-5 px-6 transition-all duration-300 ease-in-out z-50 flex items-center justify-between`}
        style={{
          top: showNav || showSidebar ? "0" : "-80px",
          backgroundColor: bgColor,
          color: textColor,
          paddingRight: showSidebar ? "20rem" : "1.5rem",
        }}
      >
        {/* Logo */}
        <h2
          className="font-semibold text-[1.5rem]"
          style={{ color: textColor }}
        >
          Learning
        </h2>

        {/* Desktop Links */}
        <div className="flex max-tablet:hidden text-[1.15rem] items-center gap-8">
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
              to={path}
              style={{ color: textColor }}
              className="hover:opacity-70 transition-colors duration-150"
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Contact */}
        <div
          className="flex max-tablet:hidden items-center gap-4"
          style={{ color: textColor }}
        >
          <LuPhoneCall className="text-[1.055rem] mr-2" />
          <p className="text-[1.05rem]">+243 7016 1275 02</p>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex min-tablet:hidden items-end"
          onClick={() => setShowSidebar((prev) => !prev)}
          aria-label="Toggle sidebar"
          style={{ color: textColor }}
        >
          {showSidebar ? (
            <IoClose className="text-[1.5rem]" />
          ) : (
            <IoReorderThreeOutline className="text-[1.5rem]" />
          )}
        </button>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-[var(--dark-blue)] z-[60] p-6 transition-transform duration-300 ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "20rem" }}
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
              to={path}
              onClick={() => setShowSidebar(false)}
              className="border-b-1 pb-3.5 text-[1.22rem] transition-colors duration-150 text-white hover:opacity-70"
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
