"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BurgerMenuIcon from "./BurgerMenuIcon";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="-mx-mobile overflow-hidden md:-mx-desktop">
      <div
        className={` pt-7  ${
          isOpen ? "bg-secondary h-screen w-full fixed " : ""
        }`}
      >
        <div onClick={toggleMenu} className="mx-mobile z-10 md:mx-desktop ">
          <BurgerMenuIcon isOpen={isOpen}></BurgerMenuIcon>
        </div>

        {isOpen && (
          <div className="z-10 flex justify-between h-screen w-full pt-6 ">
            <div>
              <Image
                src="/spiral.svg"
                alt="Background decoration 2"
                width={300}
                height={300}
                className="opacity-60 -mt-32 "
              ></Image>
            </div>

            <div className="flex flex-col">
              <ul className="font-rethink font-bold text-5xl flex flex-col text-end w-80 text-main-1 h-screen mx-mobile md:mx-desktop  gap-10">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">Music</Link>
                </li>
                <li>
                  <Link href="/">Festival Map</Link>
                </li>
              </ul>

              <div className="">
                <Image
                  src="/flower2.svg"
                  alt="Background decoration 2"
                  width={800}
                  height={800}
                  className="opacity-20 -mr-80"
                ></Image>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BurgerMenu;
