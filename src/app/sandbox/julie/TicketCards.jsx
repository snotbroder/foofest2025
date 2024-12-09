import TicketCard from "./TicketCard";

function TicketCards() {
  return (
    <div className="flex flex-col gap-10">
      <TicketCard
        title="REGULAR"
        price="799.-"
        text="lorum"
        ticketType="regular"
      />
      <TicketCard
        title="VIP"
        price="799.-"
        text="lorum"
        ticketType="vip"
        labelText="Best Offer"
      />
    </div>
  );
}

export default TicketCards;
