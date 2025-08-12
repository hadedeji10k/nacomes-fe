import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  const greenSectionRef = useRef(null);
  const [bgColor, setBgColor] = useState("green");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBgColor("green");
        } else {
          setBgColor("white");
        }
      },
      {
        threshold: 0, // triggers when any part is visible
      }
    );

    if (greenSectionRef.current) {
      observer.observe(greenSectionRef.current);
    }

    return () => {
      if (greenSectionRef.current) {
        observer.unobserve(greenSectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Navbar bgColor={bgColor} />
    </div>
  );
};

export default App;
