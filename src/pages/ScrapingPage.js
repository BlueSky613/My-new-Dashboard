import React, { useState } from "react";
import "./ScrapingPage.css";
import Site from "../components/EachSite";

export default function ScrapingPage() {
    // const Tugo = () => {
    //   return siteArray[0].isStarted = !siteArray[0].isStarted
    // }
  const siteArray = [
    {
      siteName: "Tugo",
      isStarted: false,
      funcNmae:"Tugo"
    },
    {
      siteName: "Aristas",
      isStarted: false,
    },
    {
      siteName: "Jamar",
      isStarted: false,
    },
    {
      siteName: "Spring",
      isStarted: false,
    },
    {
      siteName: "Homecenter",
      isStarted: false,
    },
  ];

//git
  return (
    <div className="pt-20 text-black scraping-page-background h-[85%]">
      <div className="ml-36 flex flex-col gap-8 mt-20 font-bold text-2xl">
        <div className="grid grid-cols-4 items-center font-seymour">
          <p>Website</p>
          <div className="flex justify-center">
            <button>Extraction</button>
          </div>
          <div className="text-center loader3">Status</div>
          <button>Results</button>
        </div>
        {siteArray.map((item, index) => (
          <Site siteName={item.siteName} isStarted={item.isStarted} id = {index} funcName = {item.funcName}/>
        ))}
      </div>
    </div>
  );
}
