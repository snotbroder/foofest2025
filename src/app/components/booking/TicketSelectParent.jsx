"use client";

import TicketSelectCard from "./TicketSelectCard";
import { useBasketStore } from "@/stores/basket-stores";
import { useBasketFunctionality } from "@/stores/basket-functionality";

function TicketSelectParent() {
  //Multiply funktion i store som sørger for at opdatere dataen korrekt/de rigtige steder i arrayet
  const updateTicketMultiply = useBasketStore((state) => state.updateTicketMultiply);

  const handleUpdate = (ticketType, newAmount) => {
    // opdater ticketAmount i basket store baseret på den ticketType følger med
    updateTicketMultiply(ticketType, newAmount);
  };

  //benyt funktionen i store, som koger begge billettyper ned til én værdi
  const totalTickets = useBasketStore((state) => state.totalTickets());
  const step = useBasketFunctionality((step) => step.bookingStep);
  const setNewStep = useBasketFunctionality((state) => state.setNewStep);
  return (
    <>
      <TicketSelectCard onAmountChange={(amount) => handleUpdate("vip ticket", amount)} ticketName="VIP TICKET" variant="type1" price="1299" subText="Best Offer"></TicketSelectCard>

      <TicketSelectCard onAmountChange={(amount) => handleUpdate("regular ticket", amount)} ticketName="REGULAR TICKET" variant="type2" price="799"></TicketSelectCard>
      <button
        onClick={() => {
          if (totalTickets === 0) {
            console.log("no");
          } else setNewStep(step + 1);
        }}
        className="btn-style grid place-self-center lg:place-self-end"
      >
        Next step
      </button>
    </>
  );
}

export default TicketSelectParent;
