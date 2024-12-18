"use client";
import { fulfillReservation } from "@/app/api";
import { useBasketStore } from "@/stores/basket-stores";
import { useBasketFunctionality } from "@/stores/basket-functionality";
import CtaButton from "../CtaButton";
function OverviewPage() {
  const reservationId = useBasketStore((state) => state.reservationId);
  const setNewStep = useBasketFunctionality((state) => state.setNewStep);
  const step = useBasketFunctionality((step) => step.bookingStep);
  async function fulfillReservationHandler() {
    try {
      const data = await fulfillReservation(reservationId);

      if (data["message"] === "Reservation completed") {
        setNewStep(step + 1);
      }
      if (data["message"] === "ID not found") {
        alert("Session invalid, retry booking");
      }
    } catch (error) {
      alert("Session invalid");
    }
  }

  return (
    <section>
      <article className="flex flex-col gap-6 mb-6">
        <h3>Policies</h3>
        <p>
          Please note, that by clicking the button below, you accept our terms
          and conditions.
        </p>
        <p className="italic">
          The festival will not be held liable for inclement weather nor
          cancellations.
        </p>
      </article>
      <button
        className={`button my-6 grid place-self-center lg:place-self-start ${
          reservationId === "" ? "opacity-60 cursor-not-allowed" : ""
        }`}
        onClick={fulfillReservationHandler}
      >
        Complete purchase
      </button>

      {reservationId === "" ? (
        <CtaButton href="/booking" text="Retry booking"></CtaButton>
      ) : (
        ""
      )}
    </section>
  );
}

export default OverviewPage;
