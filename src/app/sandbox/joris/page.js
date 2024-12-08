"use client";
import BookingSteps from "@/app/sandbox/joris/BookingSteps";
import { useState } from "react";
import "./main.css";
import Link from "next/link";
export default function Home() {
  const [state, setState] = useState(0);

  return (
    <>
      <Link href="/" className="text-blue-700 hover:text-red-600 text-xl">
        Home
      </Link>
      <div className="hello">Joris' sandbox</div>
      <BookingSteps state={state}></BookingSteps>

      <p>
        state is <span className="font-bold text-red-600">{state}</span>
      </p>

      <button
        className="border-main-1 border-2"
        onClick={() => {
          setState((prevState) => prevState - 1);
        }}
      >
        state -1
      </button>
      <button
        className="border-main-1 border-2"
        onClick={() => {
          setState((prevState) => prevState + 1);
        }}
      >
        state +1
      </button>
    </>
  );
}
