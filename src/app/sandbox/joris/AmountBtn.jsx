"use client";
import { useState } from "react";
function AmountBtn({ onAmountChange }) {
  const [amount, setAmount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  function add() {
    if (amount < 10) {
      const newAmount = amount + 1;
      setAmount(newAmount);
      onAmountChange(newAmount);
    }
    console.log("amount is: ", { amount });
  }

  function subtract() {
    if (amount > 0) {
      const newAmount = amount - 1;
      setAmount(newAmount);
      onAmountChange(newAmount);
    }
    if ((amount = 0)) {
      setDisabled(disabled);
    }
    console.log("amount is: ", { amount });
  }

  return (
    <div className="flex flex-col">
      <div className="flex place-items-center gap-1">
        <button disabled={setDisabled} onClick={subtract} className="relative disabled:opacity-60 font-rethink aspect-square bg-main-2 px-3 py-1 text-main-1 text-2xl border-solid border-main-1 border-2 after:bg-main-1 after:absolute after:top-0 after:left-0 after:-z-10 after:content-[''] after:w-full after:h-full after:ml-1 after:mt-1 hover:after:mt-0 hover:after:ml-0 after:transition-all after:duration-75 hover:outline-1 hover:border-accent-1 hover:text-main-1 hover:transition-all active:bg-accent-1">
          -
        </button>
        <span className="bg-main-2 border-2 border-main-1 border-solid rounded-full py-2 px-7 text-main-1 font-rethink text-base">{amount}</span>
        <button onClick={add} className="relative font-rethink aspect-square bg-main-2 px-3 py-1 text-main-1 text-2xl border-solid border-main-1 border-2 after:bg-main-1 after:absolute after:top-0 after:left-0 after:-z-10 after:content-[''] after:w-full after:h-full after:ml-1 after:mt-1 hover:after:mt-0 hover:after:ml-0 after:transition-all after:duration-75 hover:outline-1 hover:border-accent-1 hover:text-main-1 hover:transition-all active:bg-accent-1">
          +
        </button>
      </div>
      <span className="text-xs text-feedback-error font-rethink mt-1">{amount === 10 ? "You can max select 10" : ""}</span>
    </div>
  );
}

export default AmountBtn;
