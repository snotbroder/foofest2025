"use client";

import { useState } from "react";
import TicketSelectCard from "./TicketSelectCard";

function TicketSelectParent({ onBasketUpdate }) {
  const [ticketAmounts, setTicketAmounts] = useState({
    regular: 0,
    vip: 0,
  });

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

  //   const basketCamp = [
  // {
  //   itemTitle: "Muspelheim",
  //   itemPrice: "",
  //   itemMultiply: 0,
  // },
  //     {
  //       itemTitle: "three pers. tent",
  //       itemPrice: 399,
  //       itemMultiply: 3,
  //     },
  //   ];

  //Sæt billetamount i
  //   function handleAmountChange(ticketType, newAmount) {
  //     setTicketAmounts((prevAmounts) => ({
  //       ...prevAmounts,
  //       [ticketType]: newAmount,
  //     }));
  //   }
  return (
    <>
      <TicketSelectCard onAmountChange={(amount) => handleAmountChange("vip", amount)} ticketName="VIP TICKET" variant="type1" price="1299" subText="Best Offer"></TicketSelectCard>

      <TicketSelectCard onAmountChange={(amount) => handleAmountChange("regular", amount)} ticketName="REGULAR TICKET" variant="type2" price="799"></TicketSelectCard>
    </>
  );
}

export default TicketSelectParent;
