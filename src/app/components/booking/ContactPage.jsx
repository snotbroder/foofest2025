"use client";
import ContactForm from "./ContactForm";
import { postGuestInfo } from "@/app/api";
import { useBasketStore } from "@/stores/basket-stores";
import { useBasketFunctionality } from "@/stores/basket-functionality";

function ContactPage() {
  function sendData(formData) {
    console.log("sending data");

    const data = [];

    forms.forEach((_, index) => {
      const personData = {
        first_name: formData.get(`first_name_${index}`),
        last_name: formData.get(`last_name_${index}`),
        email: formData.get(`email_${index}`),
      };

      data.push(personData);
    });

    postGuestInfo(data);
  }

  const step = useBasketFunctionality((step) => step.bookingStep);
  const setNewStep = useBasketFunctionality((state) => state.setNewStep);
  const totalTickets = useBasketStore((state) => state.totalTickets());

  const forms = new Array(totalTickets).fill(null);

  console.log("Total Item Multiply:", totalTickets);
  return (
    <div>
      <form
        action={sendData}
        onSubmit={() => setNewStep(step + 1)}
        className="flex flex-col gap-8 "
      >
        <fieldset>
          <legend className="font-rethink text-2xl mb-6 text-main-1">
            Contact information
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {forms.map((_, index) => {
              return <ContactForm key={index} index={index} />;
            })}
          </div>
        </fieldset>
        <button
          type="submit"
          className="bg-accent-1 text-sm button flex self-start px-4 py-0.5"
        >
          Sumbit
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
