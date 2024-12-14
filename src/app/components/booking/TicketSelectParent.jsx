"use client";

import TicketSelectCard from "./TicketSelectCard";
import { useBasketStore } from "@/stores/basket-stores";

function TicketSelectParent() {
  //Multiply funktion i store som sørger for at opdatere dataen korrekt/de rigtige steder i arrayet
  const updateTicketMultiply = useBasketStore((state) => state.updateTicketMultiply);

  const handleUpdate = (ticketType, newAmount) => {
    // Update the ticket amount in Zustand state
    updateTicketMultiply(ticketType, newAmount);
  };

  return (
    <>
      <TicketSelectCard onAmountChange={(amount) => handleUpdate("vip ticket", amount)} ticketName="VIP TICKET" variant="type1" price="1299" subText="Best Offer"></TicketSelectCard>

      <TicketSelectCard onAmountChange={(amount) => handleUpdate("regular ticket", amount)} ticketName="REGULAR TICKET" variant="type2" price="799"></TicketSelectCard>
    </>
  );
}

export default TicketSelectParent;
