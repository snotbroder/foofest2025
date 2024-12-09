"use client";
import { useState } from "react";
import Basket from "./Basket";
("use client");
import { useState } from "react";
import AmountBtn from "./AmountBtn";
import "./main.css";
import Link from "next/link";

export default function Home() {
  const [basketData, setBasketData] = useState([]);
  const basketTickets = [
    {
      itemTitle: "regular ticket",
      itemMultiply: 1,
      itemPrice: 799,
    },
    {
      itemTitle: "vip ticket",
      itemMultiply: 3,
      itemPrice: 1299,
    },
  ];
  const basketCamp = [
    // {
    //   itemTitle: "Muspelheim",
    //   itemPrice: "",
    //   itemMultiply: 0,
    // },
    {
      itemTitle: "three pers. tent",
      itemPrice: 399,
      itemMultiply: 3,
    },
  ];

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
      <main className="grid grid-cols-1 lg:grid-cols-3">
        <div></div>
        <div></div>
        <div className="-mx-mobile lg:mx-0">
          <Basket basketCamp={basketCamp} basketTickets={basketTickets}></Basket>
        </div>
      </main>
      <AmountBtn onAmountChange={handleAmountChange}></AmountBtn>
      <span>amount is {amount}</span>
    </>
  );
}
