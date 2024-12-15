"use client";
import { create } from "zustand";

export const useBasketFunctionality = create((set) => ({
  bookingStep: 0,

  reservationTime: 500000, //reserveringstiden
  startCountdown: (ref, reservationTime) => {
    if (reservationTime <= 0) {
      console.error("Invalid reservationTime: must be greater than 0");
      return;
    }
    ref.current = Date.now(); // Start time is now
    set({}); // Trigger re-render
  },

  // stepHandler(newStep) {
  //   if (newStep <= step) {
  //     setStep(newStep);
  //   }
  // },
}));
