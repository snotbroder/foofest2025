"use client";
import { create } from "zustand";

export const useBasketFunctionality = create((set) => ({
  bookingStep: 0,

  reservationTime: 100000, //reserveringstiden
  startCountdown: (ref) => {
    //ref current skal være lig med tiden ligenu
    ref.current = Date.now();
    set({}); // Trigger a re-render (Zustand needs to notify subscribers)
  },

  stepHandler(newStep) {
    if (newStep <= step) {
      setStep(newStep);
    }
  },
}));
