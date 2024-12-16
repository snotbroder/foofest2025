"use client";
import { fulfillReservation } from "@/app/api";
import { useBasketStore } from "@/stores/basket-stores";
function OverviewPage() {
  const reservationId = useBasketStore((state) => state.reservationId);
  async function fulfillReservationHandler() {
    try {
      console.log("fulfilling reservation: ", { reservationId });
      const data = await fulfillReservation(reservationId);

      console.log("reservation: ", data);
      if (data["message"] === "Reservation completed") {
        alert("Completed successfully");
      } else {
        alert("Session invalid");
      }
    } catch (error) {
      alert("Session invalid");
      console.error("error reserving spot:", error);
    }
  }

  return (
    <>
      <button className="button" onClick={fulfillReservationHandler}>
        Complete
      </button>
    </>
  );
}

export default OverviewPage;
