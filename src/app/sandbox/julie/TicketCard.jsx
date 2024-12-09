function TicketCard({
  bgColor,
  title,
  ticketType,
  text,
  price,
  labelText,
  label,
}) {
  return (
    <div>
      <div
        className={` bg-primary flex flex-col gap-4 pt-6 p-8  w-56 h-72 ${ticketType} `}
      >
        <h2 className=" font-rethink font-semibold text-main-1 text-3xl">
          {title}
        </h2>
        <h3 className=" font-rethink text-main-1 text-2xl">{price}</h3>
        <p>{text}</p>
        <div
          className={`bg-secondary font-rethink flex self-end  rounded-rounded-reg px-2 cardlabel cardlabel-container ${label}`}
        >
          {labelText}
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
