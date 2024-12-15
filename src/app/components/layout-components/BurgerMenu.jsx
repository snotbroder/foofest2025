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
      <div className=" relative top-5 gap-9 z-50 flex justify-end items-center">
        <div className="absolute left-0 top-6">
          <Image
            objectFit="cover"
            src="illustrations/svg/logo.svg"
            width={135}
            height={135}
          ></Image>
        </div>

        <div>
          <CtaButton text="Buy ticket"></CtaButton>
        </div>
        <div onClick={toggleMenu} className="">
          <BurgerMenuIcon isOpen={isOpen}></BurgerMenuIcon>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-primary z-10 bg-[url('/img/filterbg.png')] bg-cover	bg-no-repeat">
          <div className="bg-[url('/illustrations7svg/circle.svg')] bg-cover bg-repeat z-40">
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
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
