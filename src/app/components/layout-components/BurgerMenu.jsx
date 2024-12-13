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
  return (
    <div>
      <div className="fixed top-5 right-5 z-50 flex ">
        <div>
          <CtaButton text="Buy ticket"></CtaButton>
        </div>

        <div onClick={toggleMenu} className="">
          <BurgerMenuIcon isOpen={isOpen}></BurgerMenuIcon>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-secondary pt-6 z-40">
          <Image
            className="absolute top-10 left-10"
            src="/illustrations/flower2Green.svg"
            width={300}
            height={300}
            alt="Decorative Flower"
          />

          <ul className="mt-8 font-rethink font-bold text-5xl flex flex-col items-end text-main-1 gap-10 p-10">
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
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
