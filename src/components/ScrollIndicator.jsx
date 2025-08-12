import { useState, useEffect } from "react";

export default function ScrollIndicator() {
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // how much we scrolled
      const docHeight = document.documentElement.scrollHeight - window.innerHeight; // total scrollable height
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScroll(scrollPercent);
      setVisible(scrollPercent > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-1/2 right-4 transition-opacity duration-400 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center justify-center ">
        <span className="text-black text-[10px] tracking-widest -rotate-90 mb-7">
          SCROLL
        </span>
        <div className="h-15 w-[2px] bg-gray-300 rounded-full z-50">
          <div
            className="bg-black transition-all duration-30"
            style={{ height: `${scroll}%` }}
          />
        </div>
      </div>
    </div>
  );
}
