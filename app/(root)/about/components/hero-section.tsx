"use client";
import React, { useState } from "react";
import { heroSectionData } from "../data";
import Image from "next/image";

export const HeroSection = () => {
  const [isOpen, setIsOpen] = useState("");

  const handleToggle = (feature: string) => {
    if (isOpen === feature) return setIsOpen("");
    setIsOpen(feature);
  };

  const handleExpand = (feature: string) => {
    // if no hero is selected
    if (isOpen === "") return "lg:w-[25%] h-[25%] lg:h-[100%]";
    // if the hero is selected
    return isOpen === feature ? "w-full h-full" : "lg:w-[0%] h-[0%]";
  };

  const handleDescription = (feature: string) => {
    // if (isOpen === "") return "top-[100%]";
    // if the feature is selected
    return isOpen === feature
      ? "top-[70%] left-[0%] lg:top-[50%] lg:left-[15%]"
      : "top-[100%] lg:left-[15%]";
  };

  const handleTitle = (feature: string) => {
    if (isOpen === "") return "top-[50%]";
    if (isOpen !== feature) return "top-[-100%] ";
    if (isOpen === feature) return "top-[-100%] mx-auto";
  };

  const renderHeroDiv = () => {
    return heroSectionData.map((data) => {
      return (
        <div
          className={`relative cursor-pointer bg-cover bg-no-repeat bg-center 
          transition-all duration-300 ease-in-out overflow-hidden ${handleExpand(
            data.title
          )}`}
          // style={{
          //   backgroundImage: `url(${data.url})`,
          // }}
          onClick={() => handleToggle(data.title)}
          key={data.url}
        >
          <Image
            src={data.url}
            alt={data.url}
            className="object-cover cursor-pointer hero-shadow"
            fill={true}
            sizes="(min-width: 1040px) 25vw, 100vw"
          />
          <div className="absolute inset-0 shadow-inset"></div>

          {/* <h1 className="text-3xl flex justify-center items-center text-white">
            {data.title}
          </h1>
          <h3 className="text-white">{data.description}</h3> */}

          <h1
            className={`font-rubik text-[36px] text-center text-white transition-all duration-300  ease-in-out relative ${handleTitle(
              data.title
            )}`}
          >
            {data.title}
          </h1>
          <div
            className={`text-white p-2 font-sans text-[24px] lg:text-[36px] lg:w-[600px] transition-all duration-300 delay-100  ease-in-out relative ${handleDescription(
              data.title
            )}`}
          >
            {data.description}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col lg:flex-row app-h overflow-hidden">
      {renderHeroDiv()}
    </div>
  );
};
