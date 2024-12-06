"use client";
import CtaButton from "@/components/CtaButton";
import "./main.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/" className="text-blue-700 hover:text-red-600 text-xl">
        Home
      </Link>
      <div className="hello">Joris' sandbox</div>
      <div className="grid grid-cols-2 gap-6">
        <button onClick={sayHi} className="btn-style">
          cssbutton
        </button>
        <CtaButton action="sayHi" text="componentbutton"></CtaButton>
      </div>
    </>
  );
}
function sayHi() {
  console.log("Hi");
}
