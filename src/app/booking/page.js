"use client";
import CampingPage from "../components/booking/CampingPage";
import { getSpots } from "../api";
import BookingSteps from "../components/booking/BookingSteps";
import { useState } from "react";
import TicketSelectCard from "../components/booking/TicketSelectCard";
import Basket from "../components/booking/Basket";

export default function BookingPage() {
  const [step, setStep] = useState(0);

  function stepHandler(newStep) {
    if (newStep <= step) {
      setStep(newStep);
    }
  }

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

  return (
    <>
      <p>
        step is <span className="font-bold text-red-600">{step}</span>
      </p>
      <button
        className="border-main-1 border-2"
        onClick={() => {
          setStep((prevState) => prevState - 1);
        }}
      >
        step -1
      </button>
      <button
        className="border-main-1 border-2"
        onClick={() => {
          setStep((prevState) => prevState + 1);
        }}
      >
        step +1
      </button>
      <BookingSteps stepHandler={stepHandler} step={step}></BookingSteps>
      <h1 className="font-spicy text-main-1 text-4xl mb-3">
        {step === 0 && "Select Ticket Type"}
        {step === 1 && "Select Camp"}
        {step === 2 && "Guest Information"}
        {step === 3 && "Payment Information"}
        {step === 4 && "Booking Overview"}
      </h1>
      <section className="lg:grid grid-cols-[2fr_1fr] grid-rows-1 gap-4 ">
        {step === 0 && (
          <article>
            <TicketSelectCard ticketName="VIP TICKET" variant="type1" price="1299" subText="Best Offer"></TicketSelectCard>

            <TicketSelectCard ticketName="REGULAR TICKET" variant="type2" price="799"></TicketSelectCard>
          </article>
        )}
        {step === 1 && <article></article>}
        {step === 2 && <article></article>}
        {step === 3 && <article></article>}
        {step === 4 && <article></article>}
        <Basket basketCamp={basketCamp} basketTickets={basketTickets}></Basket>
      </section>
    </>
  );
}
