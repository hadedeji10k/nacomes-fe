import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import BlogPage from "./components/BlogPage";
import AboutNacomesHero from "./components/AboutNacomesHero";
import MeetLecturers from "./components/MeetLecturers";
import RecentPublications from "./components/RecentPublications";
import AboutHeader from "./components/AboutHeader";
import AboutHistory from "./components/AboutHistory";
import AboutIcons from "./components/AboutIcons";
import Executives from "./components/Executives";
import PictureCard from "./components/PictureCard";
import Footer from "./Footer.jsx";
import HeroSection from "./HeroSection.jsx";
import DotGrid from "./components/blocks/Backgrounds/DotGrid/DotGrid.jsx";
import Particles from "./components/blocks/Backgrounds/Particles/Particles.jsx";

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
      <AboutNacomesHero />
      <MeetLecturers />
      <RecentPublications />
      <AboutHeader />
      <AboutHistory />
      <AboutIcons />
      <Executives />
      <PictureCard />

      <div className="relative w-full">
        {/* DotGrid as background */}
        <div className="absolute inset-0 W-full h-full">
          <DotGrid
            dotSize={4}
            gap={12}
            baseColor="#211A2D"
            activeColor="#E53724"
            proximity={60}
            shockRadius={200}
            shockStrength={3}
            resistance={650}
            returnDuration={3}
          />
        </div>

        {/* Particles as background */}
        <div className="absolute inset-0 W-full h-full">
          <div style={{ width: "100%", height: "600px", position: "relative" }}>
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
        </div>

        {/* Foreground content */}
        <div className="relative">
          <HeroSection />
        </div>

        <div className="relative flex flex-col w-full min-h-screen bg-gray-100">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
