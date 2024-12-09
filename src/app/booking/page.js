"use client";
import CampingPage from "../components/booking/CampingPage";
import { getSpots } from "../api";
import BookingSteps from "../components/booking/BookingSteps";
import { useState } from "react";

export default function BookingPage() {
  const [step, setStep] = useState(0);

  function stepHandler(newStep) {
    if (newStep <= step) {
      setStep(newStep);
    }
  }

  return (
    <main>
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
      {/* <CampingPage /> */}
    </main>
  );
}
