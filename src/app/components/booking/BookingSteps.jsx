"use client";
import { RxDoubleArrowRight } from "react-icons/rx";

function BookingSteps({ step, stepHandler }) {
  const stepNames = ["Choose tickets", "Choose camp", "Contact info", "Payment info", "Overview"];

  return (
    <>
      <ul className="flex flex-col gap-2 lg:flex-row lg:justify-between font-rethink my-6">
        {stepNames.map((stepName, index) => (
          <li
            key={index}
            onClick={() => {
              if (index <= step) {
                stepHandler(index);
              }
            }}
            className={`cursor-pointer ${step === index ? "text-main-2 font-semibold bg-secondary rounded-rounded-reg px-3" : step > index ? "italic text-secondary hover:underline hover:not-italic" : "text-feedback-disabled-1 cursor-not-allowed"}`}
          >
            {stepName}
          </li>
        ))}
      </ul>
    </>
  );
}

export default BookingSteps;
