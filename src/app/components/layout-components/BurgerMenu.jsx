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
    <div className="bg-primary  py-6">
      <div className="lg:mx-desktop z-50 flex justify-between place-items-center">
        <div className="">
          <Image
            objectFit="cover"
            src="illustrations/svg/logo.svg"
            width={90}
            height={90}
          ></Image>
        </div>

        <section className="flex justify-end  place-items-center">
          {!isOpen && (
            <div>
              <CtaButton text="Buy ticket" />
            </div>
          )}
          <div onClick={toggleMenu} className="">
            <BurgerMenuIcon isOpen={isOpen}></BurgerMenuIcon>
          </div>
        </section>
      </div>

      {isOpen && (
        <div className=" inset-0 bg-primary">
          <div
            className="inset-0 z-10 "
            style={{
              backgroundImage:
                "url('/img/filterbg.webp'), url('/illustrations/svg/circle.svg')",
              backgroundRepeat: "no-repeat, repeat",
              backgroundSize: "cover, contain",
              backgroundPosition: "center, top",
            }}
          >
            <ul className="mt-20 font-rethink font-bold text-5xl flex flex-col items-end text-main-1 gap-10 pt-10 lg:mx-desktop mx-mobile relative">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/lineup">Lineup</Link>
              </li>
              <li>
                <Link href="/schedule">Schedule</Link>
              </li>
              <li>
                <Link href="/map">Festival Map</Link>
              </li>
              <li>
                <div className="text-sm md:text-xs lg:text-lg w-[150px] mx-auto flex justify-end">
                  <CtaButton text="Buy ticket" />
                </div>
              </li>
            </ul>

            <div className="absolute right-0 -bottom-12 opacity-60">
              <Image
                src="illustrations/svg/flowerPurple.svg"
                width={700}
                height={700}
                alt="Purple Flower"
              ></Image>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
