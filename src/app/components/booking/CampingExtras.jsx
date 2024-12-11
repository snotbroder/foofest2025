"use client";
import { useState } from "react";
import AmountBtn from "../AmountBtn";

function CampingExtra({ onBasketUpdate, regularTickets, vipTickets }) {
  //Opretter state, der skal vedligeholde antal af telt typer og values
  const [tentAmounts, setTentAmounts] = useState({
    twoPersTent: 0,
    threePersTent: 0,
  });

  //totalberegn hvor mange billetter der er i ordren
  const availableTicketsAmount = regularTickets + vipTickets;

  //baseret på staten tentAmount, opdateres totalAllocatedTickets variablen også.
  //det her er de tildelte telte
  const totalAllocatedTickets = tentAmounts.twoPersTent + tentAmounts.threePersTent;

  //Split de individuelle amounts, baseret på om det bliver sendt med proppen "twoPersTent" eller "threePersTent"
  function handleAmountChange(tentType, newAmount) {
    //samler de valgte tentAmounts værdier sammen med newAmount som brugeren har valgt.
    //man kan lidt se det som en målepind, fordi længere nede sammenligner den værdien med billetter valgt i ordren (availableTicketsAmout)
    const proposedTotal = totalAllocatedTickets - tentAmounts[tentType] + newAmount;

    //tjek om der er flere telte valgt, end billetter tilgængeligt i ordren end
    if (proposedTotal > availableTicketsAmount) {
      console.log("no more tents than tickets");
      return; // returner absolut ingenting øvvvvv prøv igen
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
  console.log("availabletickets", availableTicketsAmount);
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
      <section>
        <div className="font-rethink text-main-1 border-b-2 border-b-tertiary border-b-solid my-1 pb-2 flex justify-between">
          <h3 className="text-2xl">Tents</h3>
        </div>
        <p className="text-xs italic mt-2 mb-4">Festival staff will set the tent up for you</p>
        <section className="flex flex-col gap-6">
          <div className="flex justify-between place-items-center gap-2">
            <h3 className="font-bold text-main-1 font-rethink">2 person tent +299,-</h3>
            <AmountBtn maxAmount={availableTicketsAmount - totalAllocatedTickets + tentAmounts.twoPersTent} onAmountChange={(amount) => handleAmountChange("twoPersTent", amount)}></AmountBtn>
          </div>
          <div className="flex justify-between place-items-center gap-2">
            <h3 className="font-bold font-rethink text-main-1">3 person tent +399,-</h3>
            <AmountBtn maxAmount={availableTicketsAmount - totalAllocatedTickets + tentAmounts.threePersTent} onAmountChange={(amount) => handleAmountChange("threePersTent", amount)}></AmountBtn>
          </div>
        </section>
      </section>
    </article>
  );
}

export default CampingExtra;
