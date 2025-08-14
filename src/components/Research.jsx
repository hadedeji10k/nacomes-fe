import { useState } from "react";
import Publications from "./Publications";
import OngoingResearch from "./OngoingResearch";

const Research = () => {
  const [tab, setTab] =
    (useState < "publications") | ("ongoing" > "publications");

  const switchTab = (tab: "publications" | "ongoing") => {
    setTab(tab);
  };

  return (
    <div id="research" className="w-full px-8 py-4 max-w-7xl mx-auto">
      <div className="mt-8 flex gap-6 justify-between items-center flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-[#2e0865]">Research</h1>
        <div className="bg-[#ededed] py-1.5 px-2 rounded-3xl">
          <button
            onClick={() => switchTab("publications")}
            className={`py-1.5 px-4 font-medium text-sm cursor-pointer rounded-2xl ${
              tab === "publications"
                ? "text-white bg-[#2e0865]"
                : "text-[#303030]"
            }`}
          >
            Publications
          </button>
          <button
            onClick={() => switchTab("ongoing")}
            className={`py-1.5 px-4 font-medium text-sm cursor-pointer rounded-2xl ${
              tab === "ongoing" ? "text-white bg-[#2e0865]" : "text-[#303030]"
            }`}
          >
            Ongoing research
          </button>
        </div>
      </div>
      {tab === "publications" ? <Publications /> : <OngoingResearch />}
    </div>
  );
};

export default Research;
