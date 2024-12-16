import ContactForm from "./ContactForm";
import { postGuestInfo } from "@/app/api";
import { useBasketStore } from "@/stores/basket-stores";
function ContactPage({ basketTickets }) {
  async function sendData(formData) {
    const data = [];

    forms.forEach((_, index) => {
      const personData = {
        first_name: formData.get(`first_name_${index}`),
        last_name: formData.get(`last_name_${index}`),
        email: formData.get(`email_${index}`),
      };

      data.push(personData);
    });

    await postGuestInfo(data);
  }

  const totalTickets = useBasketStore((state) => state.totalTickets());
  // const amountOfTicket = basketTickets.reduce(
  //   (total, ticket) => total + ticket.itemMultiply,
  //   0
  // );

  const forms = new Array(totalTickets).fill(null);

  console.log("Total Item Multiply:", totalTickets);
  return (
    <div>
      <form action={sendData} className="flex flex-col gap-8 ">
        <fieldset>
          <legend className="font-semibold text-xl  mb-2">
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
          className="bg-accent-1 text-sm shadow-lg shadow-black flex self-start px-4 py-0.5"
        >
          Sumbit
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
