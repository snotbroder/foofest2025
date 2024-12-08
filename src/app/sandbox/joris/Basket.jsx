"use client";

import { useState } from "react";

function Basket() {
  const [openBasket, setOpenBasket] = useState(false);

  function handleOpenBasket() {
    setOpenBasket((prevState) => !prevState);
  }
  const basketTickets = [
    {
      itemTitle: "regular ticket",
      itemMultiply: 1,
      itemPrice: 799,
    },
    {
      itemTitle: "vip ticket",
      itemMultiply: 3,
      itemPrice: 1299,
    },
  ];

  // fundet hjælp herfra https://bito.ai/resources/javascript-calculate-total-price-javascript-explained/
  let totalPrice = 0 + 99;
  for (let item of basketTickets) {
    totalPrice += item.itemPrice * item.itemMultiply;
  }

  const errorCamp = false;
  const errorTents = false;
  return (
    <section className="fixed bottom-0 w-full bg-main-2 border-y-2 lg:border-2 border-main-1 border-solid p-8 rounded-md lg:relative">
      <div className={`${openBasket ? "block" : "hidden"} md:block lg:block`}>
        <h2 className="font-spicy text-main-1 text-4xl">Basket</h2>
        <article className="flex flex-col gap-2 my-2">
          <span className="font-rethink text-xs py-1 px-3 bg-secondary text-main-2 rounded-md font-semibold w-max">Tickets</span>
          {basketTickets.map((ticket, index) => {
            return <BasketItem key={index} itemTitle={ticket.itemTitle} itemMultiply={ticket.itemMultiply} itemPrice={ticket.itemPrice} i></BasketItem>;
          })}
        </article>
        <article className="flex flex-col gap-2 my-2">
          <span className="font-rethink text-xs py-1 px-3 bg-secondary text-main-2 rounded-md font-semibold w-max">Camp</span>
          <span className="font-rethink text-xs text-feedback-error ">Please choose a camp</span>
        </article>

        <article className="font-rethink text-main-1 border-b-2 border-b-tertiary border-b-solid pb-2 my-1 mb-4 flex justify-between">
          <span>
            <span className="font-bold">Reservation fee</span>
          </span>
          <span>99,-</span>
        </article>
      </div>
      <footer className="font-rethink text-main-1">
        <span className="font-rethink text-main-1 flex justify-between mb-2">
          <span>TOTAL</span>
          <span className="font-bold text-4xl">{totalPrice},-</span>
        </span>
        <div className="font-rethink text-xs text-feedback-error text-end">
          {errorCamp && "Please choose a camp to continue"}
          {errorTents && "You can only buy tents based on the amount of tickets "}
        </div>
        <button onClick={handleOpenBasket} className="md:hidden lg:hidden">
          open cart
        </button>
      </footer>
    </section>
  );
}

export default Basket;

export function BasketItem({ itemTitle, itemMultiply, itemPrice }) {
  // const itemMultiply = 1;
  // const itemTitle = "regular ticket";
  // const itemPrice = 799;
  return (
    <div className="font-rethink text-main-1 border-b-2 border-b-tertiary border-b-solid my-1 pb-2 flex justify-between">
      <span>
        <span className="mr-2 font-bold">{itemMultiply}</span>
        <span className="uppercase">{itemTitle}</span>
      </span>
      <span>{itemPrice},-</span>
    </div>
  );
}
