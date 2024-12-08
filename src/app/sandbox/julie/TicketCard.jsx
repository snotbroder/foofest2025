function TicketCard({ bgColor, title, ticketType, text, price, labelText }) {
  return (
    <div>
      <div
        className={` bg-primary flex flex-col gap-4 pt-6 p-8  w-56 h-72 ${ticketType} `}
      >
        <h2 className=" font-semibold text-main-1 text-3xl">{title}</h2>
        <h3 className="text-main-1 text-2xl">{price}</h3>
        <p>{text}</p>
        <div>{labelText}</div>
      </div>
    </div>
  );
}

export default TicketCard;
