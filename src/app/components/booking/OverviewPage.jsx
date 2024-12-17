"use client";
import { fulfillReservation } from "@/app/api";
import { useBasketStore } from "@/stores/basket-stores";
import { useBasketFunctionality } from "@/stores/basket-functionality";
function OverviewPage() {
  const reservationId = useBasketStore((state) => state.reservationId);
  const setNewStep = useBasketFunctionality((state) => state.setNewStep);
  const step = useBasketFunctionality((step) => step.bookingStep);
  async function fulfillReservationHandler() {
    try {
      console.log("fulfilling reservation: ", { reservationId });
      const data = await fulfillReservation(reservationId);

      console.log("reservation: ", data);
      if (data["message"] === "Reservation completed") {
        console.log("Completed successfully");
        setNewStep(step + 1);
      }
      if (data["message"] === "ID not found") {
        alert("Session invalid, retry booking");
      }
    } catch (error) {
      alert("Session invalid");
      console.error("error reserving spot:", error);
    }
  }

  return (
    <section>
      <article className="flex flex-col gap-6 mb-6">
        <h3>Policies</h3>
        <p>Please note, that by clicking the button below, you accept our terms and conditions.</p>
        <p className="italic">The festival will not be held liable for inclement weather nor cancellations.</p>
      </article>
      <button className="btn-style grid place-self-center" onClick={fulfillReservationHandler}>
        Complete purchase
    <>
      <button className="button" onClick={fulfillReservationHandler}>
        Complete
      </button>
    </section>
  );
}

export default OverviewPage;
