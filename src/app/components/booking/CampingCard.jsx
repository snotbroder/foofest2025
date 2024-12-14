"use client";

import { reserveSpot } from "@/app/api";

import { useBasketStore } from "@/stores/basket-stores";

function CampingCard({ area, space, info }) {
  const chosenCamp = useBasketStore((state) => state.chosenCamp);
  const setChosenCamp = useBasketStore((state) => state.setChosenCamp);
  const setReserveId = useBasketStore((state) => state.setReserveId);
  const totalTickets = useBasketStore((state) => state.totalTickets());

  //hent reservationsID
  const reservationId = useBasketStore((state) => state.reservationId);

  async function reserveSpotHandler(selectedArea, ticketAmount) {
    try {
      console.log("Reserving Spot: ", { area: selectedArea, tickets: ticketAmount });
      const data = await reserveSpot(selectedArea, ticketAmount);
      setReserveId(data["id"]);
      console.log("reservation: ", data["id"]);
    } catch (error) {
      console.error("error reserving spot:", error);
    }
  }

  return (
    <div
      onClick={() => {
        if (totalTickets > space) {
          alert("not enough space");
        }
        if (space === 0) {
          alert("There is no availability at desired camp");
        } else {
          setChosenCamp(area);
          reserveSpotHandler(area, totalTickets);
        }
      }} //space === 0 ? "bg-feedback-disabled-2 border-feedback-disabled-1" : "border-main-1"
      className={` ${chosenCamp === area ? "bg-main-2 border-solid border-main-1 border-2 after:bg-transparent" : "bg-primary"} flex flex-col gap-2 p-6 w-48 h-36 cursor-pointer after:bg-main-1 relative after:absolute after:top-0 after:left-0 after:-z-10 after:content-[''] after:w-full after:h-full after:ml-1 after:mt-1 hover:after:mt-0 hover:after:ml-0 after:transition-all after:duration-75 hover:outline-1 hover:outline-main-1 hover:text-main-1 hover:transition-all `}
    >
      <h3 className="font-rethink font-semibold">{area}</h3>
      <p>{info}</p>
      <h4 className={`font-rethink  ${space === 0 ? "text-feedback-error" : "text-main-1"}`}>{space} spaces available</h4>
      {totalTickets > space && <p className="small text-feedback-error">Your order has too many tickets</p>}
    </div>
  );
}

export default CampingCard;
