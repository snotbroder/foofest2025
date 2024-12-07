"use client";
import { useState } from "react";
import AmountBtn from "./AmountBtn";
import "./main.css";
import Link from "next/link";

export default function Home() {
  const [amount, setAmount] = useState(0);
  function handleAmountChange(newAmount) {
    setAmount(newAmount);
  }
  return (
    <>
      <Link href="/" className="text-blue-700 hover:text-red-600 text-xl">
        Home
      </Link>
      <div className="hello">Joris' sandbox</div>
      <AmountBtn onAmountChange={handleAmountChange}></AmountBtn>
      <span>amount is {amount}</span>
    </>
  );
}
