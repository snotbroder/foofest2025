function Basket() {
  return (
    <section className="hidden lg:block bg-main-2 border-2 border-main-1 border-solid p-8 rounded-md">
      <h2 className="font-spicy text-main-1 text-4xl">Basket</h2>
      <article className="flex flex-col gap-2 my-2">
        <span className="font-rethink text-xs py-1 px-3 bg-secondary text-main-2 rounded-md font-semibold w-max">Tickets</span>
        <BasketItem></BasketItem>
      </article>
      <article className="flex flex-col gap-2 my-2">
        <span className="font-rethink text-xs py-1 px-3 bg-secondary text-main-2 rounded-md font-semibold w-max">Camp</span>
      </article>
    </section>
  );
}

export default Basket;

export function BasketItem({}) {
  const itemMultiply = 1;
  const itemTitle = "regular ticket";
  const itemPrice = 799;
  return (
    <div className="font-rethink border-b-2 border-b-tertiary border-b-solid m-1 flex justify-between">
      <span>
        <span className="mr-2 font-bold">{itemMultiply}</span>
        {itemTitle}
      </span>
      <span>{itemPrice},-</span>
    </div>
  );
}
