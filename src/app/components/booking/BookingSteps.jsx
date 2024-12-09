"use client";

function BookingSteps({ step, stepHandler }) {
  const steps = ["Choose tickets", "Choose camp", "Contact info", "Payment info", "Overview"];
  return (
    <ul className="flex flex-col gap-2 lg:flex-row lg:justify-between font-rethink">
      {steps.map((stepName, index) => (
        <li
          key={index}
          onClick={() => {
            if (index <= step) {
              stepHandler(index);
            }
          }}
          className={`cursor-pointer ${step === index ? "text-secondary font-bold" : step > index ? "underline text-main-1" : "text-feedback-disabled-1"}`}
        >
          {stepName}
        </li>
      ))}
    </ul>
  );
}

export default BookingSteps;
