import React, { useState, useEffect, useRef } from "react";
import "../index.css";

const FunFact = () => {
  const [turnOn, setTurnOn] = useState(false);
  const bulbRef = useRef(null);

  // Detect when the bulb section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTurnOn(true); // Turn on when visible
        } else {
          setTurnOn(false); // Turn off when not visible
        }
      },
      { threshold: 0.99 } // At least 50% in view
    );

    if (bulbRef.current) {
      observer.observe(bulbRef.current);
    }

    return () => {
      if (bulbRef.current) {
        observer.unobserve(bulbRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center  bg-(--light-blue) text-white ">
      {/* Left: Bulb section */}
      <div
        ref={bulbRef}
        className={`w-1/2 flex items-center justify-center ${
          turnOn ? "block" : "block night"
        }`}
      >
        <div className="container">
          <div className="bulb-light">
            <div id="light" />

            <div id="bulb">
              <div className="bulb-top">
                <div className="reflection" />
              </div>
              <div className="bulb-middle-1" />
              <div className="bulb-middle-2" />
              <div className="bulb-middle-3" />
              <div className="bulb-bottom" />
            </div>

            <div id="base">
              <div className="screw-top" />
              <div className="screw-a" />
              <div className="screw-b" />
              <div className="screw-a" />
              <div className="screw-b" />
              <div className="screw-a" />
              <div className="screw-b" />
              <div className="screw-c" />
              <div className="screw-d" />
            </div>
          </div>
        </div>
      </div>

      {/* Right: Fun Fact section */}
      <div className="w-1/2 p-8">
        <h1 className="text-3xl font-bold mb-4">💡 Fun Fact</h1>
        <p className="text-lg leading-relaxed">
          The first computer bug was an actual bug - In 1947, engineers found a moth stuck in the Harvard Mark II computer relay, causing an error. They taped it into the logbook and coined the term “debugging.”
        </p>
      </div>
    </div>
  );
};

export default FunFact;