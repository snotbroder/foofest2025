"use client";
import { useBasketStore } from "@/stores/basket-stores";

import BookingSteps from "../components/booking/BookingSteps";
import Basket from "../components/booking/Basket";
import TicketSelectParent from "../components/booking/TicketSelectParent";
import CampingCards from "../components/booking/CampingCards";
import CampingExtra from "../components/booking/CampingExtras";
import ContactPage from "../components/booking/ContactPage";
import PaymentInfo from "../components/booking/PaymentInfo";
import { useBasketFunctionality } from "@/stores/basket-functionality";
import OverviewPage from "../components/booking/OverviewPage";
import CtaButton from "../components/CtaButton";

export default function BookingPage() {
  //const [step, setStep] = useState(0);

  // function stepHandler(newStep) {
  //   if (newStep <= step) {
  //     setStep(newStep);
  //   }
  // }

  const fullBasket = useBasketStore((state) => state);
  const step = useBasketFunctionality((step) => step.bookingStep);
  const setNewStep = useBasketFunctionality((state) => state.setNewStep);
  return (
    <>
      <BookingSteps></BookingSteps>

      <h1 className="  mb-3">
        {step === 0 && "Select Ticket Type"}
        {step === 1 && "Select Camp"}
        {step === 2 && "Guest Information"}
        {step === 3 && "Payment Information"}
        {step === 4 && "Booking Overview"}
      </h1>

      <section className="lg:grid grid-cols-[2fr_1fr] grid-rows-1 gap-4 ">
        {step === 0 && (
          <article>
            <TicketSelectParent></TicketSelectParent>
          </article>
        )}
        {step === 1 && (
          <article>
            <section className="lg:grid grid-cols-2">
              <CampingCards />
              <CampingExtra></CampingExtra>
            </section>
            {/* <button className=" font-rethink text-main-2 font-sm bg-accent-1 px-4 py-2 hover:text-main-1 uppercase font-bold max-w-[100%] shadow-[4px_4px_0px_#3a140b] transform scale-[1.02] transition-all duration-200 ease-in hover:shadow-[8px_8px_0px_#3a140b] grid place-self-center lg:place-self-end">
              Next step
            </button> */}
          </article>
        )}
        {step === 2 && (
          <article className="bg-primary rounded-rounded-reg p-10">
            <ContactPage></ContactPage>
          </article>
        )}
        {step === 3 && (
          <article className="bg-primary rounded-rounded-reg p-10">
            <PaymentInfo />
          </article>
        )}
        {step === 4 && (
          <article className="-order-1">
            <OverviewPage></OverviewPage>
          </article>
        )}
        {step === 5 && (
          <article>
            <h1>Thank you for your money ;)</h1>
            Back to home
          </article>
        )}
        <Basket></Basket>
      </section>
      <p>
        step is <span className=" text-red-600">{step}</span>
      </p>
      <button
        className="border-main-1 border-2"
        onClick={() => {
          setNewStep(step + 1);
        }}
      >
        step +1
      </button>
    </>
  );
}
