"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BurgerMenuIcon from "./BurgerMenuIcon";
import CtaButton from "../CtaButton";

function BurgerMenu() {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
  function handleOpenBurgerMenu() {
    setOpenBurgerMenu((prevState) => !prevState);
  }

  return (
    <div className="bg-primary relative  py-6   z-50     bg-[url('/img/filterbg.webp')] bg-no-repeat bg-cover">
      <div className="lg:mx-desktop  flex justify-between place-items-center">
        <div className="">
          <Image
            objectFit="cover"
            src="illustrations/svg/logo.svg"
            width={90}
            height={90}
          ></Image>
        </div>

        <section className="flex justify-end gap-6 place-items-center">
          <div>
            <CtaButton href="/" text="Buy ticket" />
          </div>

          <div onClick={handleOpenBurgerMenu} className="">
            <BurgerMenuIcon openBurgerMenu={openBurgerMenu}></BurgerMenuIcon>
          </div>
        </section>
      </div>

      {openBurgerMenu ? (
        <div className=" inset-0 relative h-full -z-10">
          <ul className=" font-rethink font-bold text-5xl flex flex-col items-end text-main-1 gap-10 py-16 lg:px-64 lg:-mx-desktop -mx-mobile relative px-16 bg-primary  bg-[url('/img/filterbg.webp')] bg-no-repeat bg-cover">
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

            <div className="absolute left-0 bottom-12 opacity-60">
              <Image
                src="illustrations/svg/flowerPurple.svg"
                width={200}
                height={200}
                alt="Purple Flower"
              ></Image>
            </div>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BurgerMenu;
