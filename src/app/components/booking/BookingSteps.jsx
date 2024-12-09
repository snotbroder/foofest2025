"use client";
function BookingSteps({ step }) {
  return (
    <ul className="flex flex-col gap-2 lg:flex-row lg:justify-between font-rethink">
      <li
        className={`${step === 0 ? "text-secondary font-bold" : step > 0 ? "underline text-main-1" : "text-feedback-disabled-2"} `}
        onClick={() => {
          step <= 0 ? console.log("step is 0 or less. step=", step) : console.log("step is not 0 or less. step=", step);
        }}
      >
        Choose tickets
      </li>
      <li
        className={`${step === 1 ? "text-secondary font-bold" : step > 1 ? "underline text-main-1" : "text-feedback-disabled-2"} `}
        onClick={() => {
          step <= 1 ? console.log("step is 1 or less. step=", step) : console.log("step is not 1 or less. step=", step);
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
      <li className={`${step === 4 ? "text-secondary font-bold" : step > 4 ? "underline text-main-1" : "text-feedback-disabled-2"} `}>Overview</li>
    </ul>
  );
}

export default BookingSteps;
