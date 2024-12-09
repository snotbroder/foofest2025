"use client";
function BookingSteps({ state }) {
  return (
    <ul className="flex flex-col gap-2 lg:flex-row lg:justify-between font-rethink">
      <li
        className={`${state === 0 ? "text-secondary font-bold" : state > 0 ? "underline text-main-1" : "text-feedback-disabled-2"} `}
        onClick={() => {
          state <= 0 ? console.log("State is 0 or less. state=", state) : console.log("State is not 0 or less. state=", state);
        }}
      >
        Choose tickets
      </li>
      <li
        className={`${state === 1 ? "text-secondary font-bold" : state > 1 ? "underline text-main-1" : "text-feedback-disabled-2"} `}
        onClick={() => {
          state <= 1 ? console.log("State is 1 or less. state=", state) : console.log("State is not 1 or less. state=", state);
        }}
      >
        Choose camp
      </li>
      <li
        className={`${state === 2 ? "text-secondary font-bold" : state > 2 ? "underline text-main-1" : "text-feedback-disabled-2"} `}
        onClick={() => {
          state <= 2 ? console.log("State is 2 or less. state=", state) : console.log("State is not 2 or less. state=", state);
        }}
      >
        Contact info
      </li>
      <li className={`${state === 3 ? "text-secondary font-bold" : state > 3 ? "underline text-main-1" : "text-feedback-disabled-2"} `}>Payment info</li>
      <li className={`${state === 4 ? "text-secondary font-bold" : state > 4 ? "underline text-main-1" : "text-feedback-disabled-2"} `}>Overview</li>
    </ul>
  );
}

export default BookingSteps;
