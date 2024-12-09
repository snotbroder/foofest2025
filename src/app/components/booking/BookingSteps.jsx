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
      {/* <li
        className={`${step === 0 ? "text-secondary font-bold" : step > 0 ? "underline text-main-1" : "text-feedback-disabled-1"} `}
        onClick={() => {
          step <= 0 ? console.log("step is 0 or less. step=", step) : console.log("step is not 0 or less. step=", step);
        }}
      >
        Choose tickets
      </li>
      <li
        className={`${step === 1 ? "text-secondary font-bold" : step > 1 ? "underline text-main-1" : "text-feedback-disabled-1"} `}
        onClick={() => {
          step <= 1 ? thisStep(1) : console.log("step is not 1 or less. step=", step);
        }}
      >
        Choose camp
      </li>
      <li
        className={`${step === 2 ? "text-secondary font-bold" : step > 2 ? "underline text-main-1" : "text-feedback-disabled-2"} `}
        onClick={() => {
          step <= 2 ? console.log("step is 2 or less. step=", step) : console.log("step is not 2 or less. step=", step);
        }}
      >
        Contact info
      </li>
      <li className={`${step === 3 ? "text-secondary font-bold" : step > 3 ? "underline text-main-1" : "text-feedback-disabled-2"} `}>Payment info</li>
      <li className={`${step === 4 ? "text-secondary font-bold" : step > 4 ? "underline text-main-1" : "text-feedback-disabled-2"} `}>Overview</li> */}
    </ul>
  );
}

export default BookingSteps;
