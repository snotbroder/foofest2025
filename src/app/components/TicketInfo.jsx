import CtaButton from "./CtaButton";

function TicketInfo({ ticketType, pText }) {
  return (
    <div className="border-2 border-main-1 inline-flex h-fit p-6 max-w-2xl flex-col gap-5 items-center justify-start rounded-rounded-reg">
      <h3 className="font-semibold">{ticketType} </h3>
      <p>{pText}</p>
      <CtaButton text="BUY TICKET" />
    </div>
  );
}

export default TicketInfo;
