import React, { useState, useEffect, useRef } from "react";
import { RiArrowRightWideLine } from "react-icons/ri";
import { RiArrowLeftWideLine } from "react-icons/ri";

import pdfImage from "../assets/pdfImage.jpeg"; // Change this to your actual import

const tabsData = [
  {
    title: "Materials",
    description: "Description for Material 1",
    id: "resource-1",
  },
  { title: "Links", description: "Description for Links", id: "resource-2" },
  {
    title: "Articles",
    description: "Description for article 1",
    id: "resource-3",
  },
];

const ResourceTab = () => {
  const [activeTab, setActiveTab] = useState("Materials");
  const [currentPage, setCurrentPage] = useState(1);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef([]);
  const itemsPerPage = 9;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // reset page when switching tabs

    if (tab) {
      setIndicatorStyle({
        width: tab.offsetWidth,
        left: tab.offsetWidth,
      });
    }
  };

  useEffect(() => {
    const activeIndex = tabsData.findIndex((item) => item.title === activeTab);
    const tab = tabsRef.current[activeIndex];
    if (tab) {
      setIndicatorStyle({
        width: tab.offsetWidth,
        left: tab.offsetLeft,
      });
    }
  }, [activeTab]);

  // Simulate 14 PDFs for Materials
  const pdfList = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    courseCode: `Course ${i + 1}`,
    description: "PDF Course Material",
  }));

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = pdfList.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(pdfList.length / itemsPerPage);

  return (
    <div>
      {/* Tabs */}
      <div className="relative flex items-center justify-center gap-8 mt-[5.5rem] bg-[#ffffff08] mx-[10rem] pb-7 border-b border-[#ccc]/50">
        {tabsData.map((item, index) => (
          <button
            key={item.id}
            ref={(el) => (tabsRef.current[index] = el)}
            onClick={() => handleTabClick(item.title, index)}
            className={`text-[1.2rem] font-semibold px-4 rounded-[20px] transition-colors duration-300
            ${activeTab === item.title ? "text-[#222]/80" : "text-[#908888]"}`}
          >
            {item.title}
          </button>
        ))}

        {/* Animated Indicator */}
        <span
          className="absolute bottom-0 h-[3px] bg-[#1b56fd] rounded-full transition-all duration-300 ease-in-out"
          style={{
            width: indicatorStyle.width,
            left: indicatorStyle.left,
          }}
        />
      </div>

      {/* Materials with Pagination */}
      <div className="mt-4 p-4 w-[90%] mx-auto">
        {activeTab === "Materials" && (
          <>
            {/* Grid */}
            <div className="grid grid-cols-3 gap-14">
              {currentItems.map((pdf) => (
                <div
                  key={pdf.id}
                  className="mt-4 bg-[#fff] inset-shadow-2xs shadow-md border border-gray-100 rounded-lg flex flex-col items-center gap-3 py-5 transition-transform duration-300 ease-in-out hover:scale-105 "
                >
                  <img
                    src={pdfImage}
                    alt="pdf Image"
                    className="w-70 h-70 object-cover"
                  />
                  <div className="flex flex-col justify-center gap-2">
                    <p className="text-sm font-medium text-[#222]/90">
                      {pdf.description}
                    </p>
                    <p className="text-center text-[.9rem] text-[#222]/80">
                      {pdf.courseCode}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                className=" py-2 rounded disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage === 1}
              >
                <RiArrowLeftWideLine />
              </button>
              <span className="font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="px- py-1 rounded disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={currentPage === totalPages}
              >
                <RiArrowRightWideLine />
              </button>
            </div>
          </>
        )}

        {/* Links with Pagination */}
        {activeTab === "Links" && (
          <>
            {/* Grid */}
            <div className="grid grid-cols-3 gap-14">
              {currentItems.map((pdf) => (
                <div
                  key={pdf.id}
                  className="mt-4 bg-[#fff] inset-shadow-2xs shadow-md border border-gray-100 rounded-lg flex flex-col items-center gap-3 py-5 transition-transform duration-300 ease-in-out hover:scale-105 "
                >
                  <img
                    src={pdfImage}
                    alt="pdf Image"
                    className="w-70 h-70 object-cover"
                  />
                  <div className="flex flex-col justify-center gap-2">
                    <p className="text-sm font-medium text-[#222]/90">
                      {pdf.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                className=" py-2 rounded disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage === 1}
              >
                <RiArrowLeftWideLine />
              </button>
              <span className="font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="px- py-1 rounded disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={currentPage === totalPages}
              >
                <RiArrowRightWideLine />
              </button>
            </div>
          </>
        )}

        {/* Links with Pagination */}
        {activeTab === "Articles" && (
          <>
            {/* Grid */}
            <div className="grid grid-cols-3 gap-14">
              {currentItems.map((pdf) => (
                <div
                  key={pdf.id}
                  className="mt-4 bg-[#fff] inset-shadow-2xs shadow-md border border-gray-100 rounded-lg flex flex-col items-center gap-3 py-5 transition-transform duration-300 ease-in-out hover:scale-105 "
                >
                  <img
                    src={pdfImage}
                    alt="pdf Image"
                    className="w-70 h-70 object-cover"
                  />
                  <div className="flex flex-col justify-center gap-2">
                    <p className="text-sm font-medium text-[#222]/90">
                      {pdf.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                className=" py-2 rounded disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage === 1}
              >
                <RiArrowLeftWideLine />
              </button>
              <span className="font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="px- py-1 rounded disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={currentPage === totalPages}
              >
                <RiArrowRightWideLine />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResourceTab;
