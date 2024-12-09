function TicketSelectCard({ variant, ticketName, price, subText }) {
  return (
    <article data-variant={variant} className="bg-[url('https://www.svgrepo.com/show/202890/flower.svg')] bg-no-repeat bg-right-top bg-contain data-[variant=type1]:bg-tertiary data-[variant=type2]:bg-primary rounded-rounded-reg p-8 flex flex-col gap-3 lg:flex-row lg:justify-between lg:place-items-center lg:p-10">
      <div>
        <header className="flex gap-3 place-items-center">
          <h3 className="font-rethink font-bold text-3xl">{ticketName}</h3>
          <span className="bg-secondary px-2 font-rethink font-xs text-main-2 rounded-rounded-reg font-semibold">{subText}</span>
        </header>
        <span className="font-rethink text-2xl">{price},-</span>
      </div>
      <div>AMOUNT THING</div>
    </article>
  );
}

export default TicketSelectCard;
