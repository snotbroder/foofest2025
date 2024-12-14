"use client";
import { useState } from "react";
import { useBasketStore } from "@/stores/basket-stores";

import BookingSteps from "../components/booking/BookingSteps";
import Basket from "../components/booking/Basket";
import TicketSelectParent from "../components/booking/TicketSelectParent";
import CampingCards from "../components/booking/CampingCards";
import CampingExtra from "../components/booking/CampingExtras";
import ContactPage from "../components/booking/ContactPage";

export default function BookingPage() {
  const [step, setStep] = useState(0);

  function stepHandler(newStep) {
    if (newStep <= step) {
      setStep(newStep);
    }
  }

  const fullBasket = useBasketStore((state) => state);
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
            <TicketSelectParent></TicketSelectParent>
            <button className="btn-style grid place-self-center lg:place-self-end">Next step</button>
          </article>
        )}
        {step === 1 && (
          <article>
            <section className="lg:grid grid-cols-2">
              <CampingCards />
              <CampingExtra></CampingExtra>
            </section>
            <button className="btn-style grid place-self-center lg:place-self-end">Next step</button>
          </article>
        )}
        {step === 2 && (
          <article className="bg-primary rounded-rounded-reg p-10">
            <ContactPage></ContactPage>
          </article>
        )}
        {step === 3 && <article></article>}
        {step === 4 && <article></article>}
        <Basket></Basket>
      </section>
      <pre>
        Data as JSON
        {JSON.stringify(fullBasket, null, 2)}
        {/* {JSON.stringify(basketArray, null, 2)} */}
      </pre>
    </>
  );
}
