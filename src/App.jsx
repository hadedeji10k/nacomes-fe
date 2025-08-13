import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Nav";

const App = () => {
  const sectionRefs = useRef([]);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  const handleScroll = () => {
    const whiteSection = sectionRefs.current[1];
    if (!whiteSection) return;

    const rect = whiteSection.getBoundingClientRect();

    const fullyVisible =
      rect.top >= 0 && rect.bottom <= window.innerHeight;

    setIsNavbarVisible(fullyVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar
        isVisible={isNavbarVisible}
        bgColor={isNavbarVisible ? "white" : "transparent"}
      />

      <div
        ref={(el) => (sectionRefs.current[0] = el)}
        style={{
          backgroundColor: "green",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "2rem",
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
  );
};

export default App;



// const App = () => {
//   const greenSectionRef = useRef(null);
//   const [bgColor, setBgColor] = useState("green");

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setBgColor("green");
//         } else {
//           setBgColor("white");
//         }
//       },
//       {
//         threshold: 0, // triggers when any part is visible
//       }
//     );

//     if (greenSectionRef.current) {
//       observer.observe(greenSectionRef.current);
//     }

//     return () => {
//       if (greenSectionRef.current) {
//         observer.unobserve(greenSectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <Navbar bgColor={bgColor} />

//       {/* Green section */}
//       <div
//         ref={greenSectionRef}
//         className="h-screen bg-green-500 flex items-center justify-center"
//       >
//         <h1 className="text-4xl text-white">Green Section</h1>
//       </div>

//       {/* White section */}
//       <div className="h-screen bg-white flex items-center justify-center">
//         <h1 className="text-4xl text-black">White Section</h1>
//       </div>
//     </div>
//   );
// };
// App.jsx
