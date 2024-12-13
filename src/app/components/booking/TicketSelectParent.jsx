"use client";

import { useState } from "react";
import TicketSelectCard from "./TicketSelectCard";

function TicketSelectParent({ onBasketUpdate }) {
  const [ticketAmounts, setTicketAmounts] = useState({
    regular: 0,
    vip: 0,
  });

  //Split de individuelle amounts, baseret på om det bliver sendt med proppen "vip" eller "regular"
  function handleAmountChange(ticketType, newAmount) {
    const updatedAmounts = { ...ticketAmounts, [ticketType]: newAmount };
    setTicketAmounts(updatedAmounts);

    //Prepare baskettickets and pass it on
    const basketTickets = [
      { itemTitle: "regular ticket", itemMultiply: updatedAmounts.regular, itemPrice: 799 },
      { itemTitle: "vip ticket", itemMultiply: updatedAmounts.vip, itemPrice: 1299 },
    ];
    onBasketUpdate(basketTickets);
  }
  return (
    <>
      <TicketSelectCard onAmountChange={(amount) => handleAmountChange("vip", amount)} ticketName="VIP TICKET" variant="type1" price="1299" subText="Best Offer"></TicketSelectCard>

      <TicketSelectCard onAmountChange={(amount) => handleAmountChange("regular", amount)} ticketName="REGULAR TICKET" variant="type2" price="799"></TicketSelectCard>
    </>
  );
}

export default TicketSelectParent;
