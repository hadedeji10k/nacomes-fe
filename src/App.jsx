import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import BlogPage from "./components/BlogPage";

const App = () => {
  const sectionRefs = useRef([]);
  const [navStyles, setNavStyles] = useState({
    bgColor: "transparent",
    textColor: "white",
  });

  const handleScroll = () => {
    const greenSection = sectionRefs.current[0];
    if (!greenSection) return;

    const rect = greenSection.getBoundingClientRect();
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div>
        <Navbar bgColor={navStyles.bgColor} textColor={navStyles.textColor} />

        <div
          ref={(el) => (sectionRefs.current[0] = el)}
          style={{
            backgroundColor: "green",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            color: "white",
          }}
        >
          Green Section
        </div>

        <div
          ref={(el) => (sectionRefs.current[1] = el)}
          style={{
            backgroundColor: "white",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
          }}
        >
          White Section
        </div>
      </div>
      <BlogPage />
    </>
  );
};

export default App;
