"use client";
import { useState } from "react";
import AmountBtn from "../AmountBtn";

function CampingExtra({ onBasketUpdate }) {
  //Opretter state, der skal vedligeholde antal af telt typer og values
  const [tentAmounts, setTentAmounts] = useState({
    twoPersTent: 0,
    threePersTent: 0,
  });

  //Split de individuelle amounts, baseret på om det bliver sendt med proppen "twoPersTent" eller "threePersTent"
  function handleAmountChange(tentType, newAmount) {
    if (newAmount > 2) {
      console.log("Error: Maximum tent amount reached!");
      return; // Exit early, preventing the state update
    }

    const updatedAmounts = { ...tentAmounts, [tentType]: newAmount };
    setTentAmounts(updatedAmounts);

    //Prepare baskettickets and pass it on
    const basketCamp = [
      { itemTitle: "two person tent", itemMultiply: updatedAmounts.twoPersTent, itemPrice: 299 },
      { itemTitle: "three person tent", itemMultiply: updatedAmounts.threePersTent, itemPrice: 399 },
    ];
    onBasketUpdate(basketCamp);
  }

  return (
    <article className="bg-main-2 border-solid border-2 border-main-1 rounded-rounded-reg max-h-max p-8 flex flex-col gap-2">
      <h3 className="font-rethink text-main-1 font-bold text-2xl">
        Extras <span className="font-normal italic">optional</span>
      </h3>
      <form className="flex gap-6 font-rethink text-main-1">
        <input className="w-10 h-auto" id="greeen-camping" type="checkbox" />
        <div className="flex flex-col gap-1">
          <label className="font-bold" for="green-camping">
            Green Camping +249,-
          </label>
          <label className="text-xs">When you buy green camping, please note only available on site.</label>
        </div>
      </form>
      <div className="font-rethink text-main-1 border-b-2 border-b-tertiary border-b-solid my-1 pb-2 flex justify-between">
        <h3 className="text-2xl">Tent</h3>
      </div>
      <p className="text-xs italic">Festival staff will set the tent up for you</p>
      <span>her ses tal {onBasketUpdate.twoPersTent}</span>
      <AmountBtn maxAmount={2} onAmountChange={(amount) => handleAmountChange("twoPersTent", amount)}></AmountBtn>
      <AmountBtn maxAmount={2} onAmountChange={(amount) => handleAmountChange("threePersTent", amount)}></AmountBtn>
    </article>
  );
}

export default CampingExtra;
