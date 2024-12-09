"use client";
import { useState } from "react";
import Basket from "./Basket";

import AmountBtn from "./AmountBtn";

import CtaButton from "@/app/sandbox/joris/CtaButton";

import BookingSteps from "@/app/sandbox/joris/BookingSteps";

import "./main.css";
import Link from "next/link";

import TicketSelectCard from "./TicketSelectCard";
export default function Home() {
  //Bruger ikke basketdata endnu
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
  const [state, setState] = useState(0);

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
      <div className="grid grid-cols-2 gap-6">
        <button onClick={sayHi} className="btn-style">
          cssbutton
        </button>
        <CtaButton
          onClick={function () {
            console.log("hej");
          }}
          action="sayHi"
          text="componentbutton"
        ></CtaButton>
      </div>

      <TicketSelectCard ticketName="VIP TICKET" variant="type1" price="1299" subText="Best Offer"></TicketSelectCard>
      <br></br>
      <TicketSelectCard ticketName="REGULAR TICKET" variant="type2" price="799"></TicketSelectCard>
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
function sayHi() {
  console.log("Hi");
}
