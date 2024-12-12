"use client";
import { useState } from "react";

function BurgerMenuIcon({ isOpen }) {
  return (
    <div className="z-10 flex justify-end">
      <div
        className={`py-3 px-2.5 rounded-full flex items-end flex-col gap-1.5 cursor-pointer transition-colors duration-300 ${
          isOpen ? "bg-main-2" : "bg-accent-1"
        }`}
      >
        <span
          className={`w-6 h-0.5 rounded-full transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2 bg-accent-1" : " bg-main-2"
          }`}
        ></span>

        <span
          className={`w-5 h-0.5 rounded-full transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "bg-main-2"
          }`}
        ></span>

        <span
          className={`w-6 h-0.5 rounded-full transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2  bg-accent-1" : "bg-main-2"
          }`}
        ></span>
      </div>
    </div>
  );
}

export default BurgerMenuIcon;
