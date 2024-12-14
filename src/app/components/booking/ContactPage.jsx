import ContactForm from "./ContactForm";

function ContactPage({ basketTickets }) {
  const amountOfTicket = basketTickets.reduce(
    (total, ticket) => total + ticket.itemMultiply,
    0
  );

  const forms = new Array(amountOfTicket).fill(null);
  console.log(forms);
  console.log(forms);
  console.log("Total Item Multiply:", amountOfTicket);
  return (
    <div>
      <form action="" className="flex flex-col gap-8 ">
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

      {/* <h1>{amountOfTicket}</h1> */}
    </div>
  );
}

export default ContactPage;
