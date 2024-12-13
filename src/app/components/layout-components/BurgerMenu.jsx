"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BurgerMenuIcon from "./BurgerMenuIcon";
import CtaButton from "../CtaButton";

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
  return (
    <div>
      <div className=" relative top-5  z-50 gap-10 flex justify-end items-center">
        <div>
          <CtaButton text="Buy ticket"></CtaButton>
        </div>

        <div onClick={toggleMenu} className="">
          <BurgerMenuIcon isOpen={isOpen}></BurgerMenuIcon>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-secondary z-40 bg-[url('/img/filterbg.png')] bg-cover	bg-repeat">
          <ul className="mt-8 font-rethink font-bold text-5xl flex flex-col items-end text-main-1 gap-10 pt-10 lg:mx-desktop mx-mobile relative">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Music</Link>
            </li>
            <li>
              <Link href="/">Festival Map</Link>
            </li>
            <div className="absolute ">
              <Image
                src="illustrations/flowerPurple.svg"
                width={800}
                height={800}
              ></Image>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
