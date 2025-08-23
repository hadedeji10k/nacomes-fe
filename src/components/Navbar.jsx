import { useState, useEffect } from "react";
import imag2 from "../assets/hacker.png";
import { IoReorderThreeOutline, IoClose } from "react-icons/io5";

const Navbar = ({ mainContainerRef }) => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  const [navStyles, setNavStyles] = useState({
    bgColor: "transparent",
    textColor: "#222/80",
  });

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

    const handleMouseScroll = () => {
      if (!mainContainerRef) return;

      const rect = mainContainerRef.getBoundingClientRect();
      const sectionHeight = rect.height;
      const visibleHeight =
        Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);

      const visiblePercent = (visibleHeight / sectionHeight) * 100;

      if (visiblePercent >= 60) {
        // Mostly in green
        setNavStyles({ bgColor: "transparent", textColor: "white" });
      } else if (visiblePercent <= 20) {
        // Mostly out of green
        setNavStyles({ bgColor: "white", textColor: "black" });
      }
      // If in between 20% and 60%, keep the last state (no flicker)
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleMouseScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleMouseScroll);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, showSidebar]);

  return (
    <div className="relative flex transition-all duration-300 ease-in-out font-['Space Grotesk']">
      <nav
        className={`fixed left-0 w-full py-5 px-6 transition-all duration-300 ease-in-out z-50 flex items-center justify-between`}
        style={{
          top: showNav || showSidebar ? "0" : "-80px",
          backgroundColor: navStyles.bgColor,
          color: navStyles.textColor,
          paddingRight: showSidebar ? "20rem" : "1.5rem",
        }}
      >
        {/* Logo */}
        <h2
          className="font-semibold text-[1.5rem] flex items-center gap-2"
          style={{ color: navStyles.textColor }}
        >
          <img src={imag2} alt="hacker" className="w-20" />
          <div className="text-white font-bold text-xl">NACOMES</div>
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
            <a
              key={path}
              href={path}
              style={{ color: navStyles.textColor }}
              className="hover:opacity-70 transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop Contact */}
        <div
          className="flex max-tablet:hidden items-center gap-4"
          style={{ color: navStyles.textColor }}
        >
          <a
            href="#login"
            className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg 
                    hover:scale-105 transform transition
                    shadow-[-2px_2px_8px_black]"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex min-tablet:hidden items-end"
          onClick={() => setShowSidebar((prev) => !prev)}
          aria-label="Toggle sidebar"
          style={{ color: navStyles.textColor }}
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
            <a
              key={path}
              href={path}
              onClick={() => setShowSidebar(false)}
              className="border-b-1 pb-3.5 text-[1.22rem] transition-colors duration-150 text-white hover:opacity-70"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
