"use client";

import { useState } from "react";
import { RiAddLine } from "react-icons/ri";

function Basket({ basketCamp, basketTickets }) {
  //Toggle button for mobile
  const [openBasket, setOpenBasket] = useState(false);

  function handleOpenBasket() {
    setOpenBasket((prevState) => !prevState);
  }

  // Omregn priser fra billetter og telte til totalpris
  // fundet hjælp herfra med for https://bito.ai/resources/javascript-calculate-total-price-javascript-explained/
  let allTicketsTotal = 0;
  for (let item of basketTickets) {
    allTicketsTotal += item.itemPrice * item.itemMultiply;
  }

  let allCampTotal = 0;
  for (let item of basketCamp) {
    allCampTotal += item.itemPrice * item.itemMultiply;
  }
  let totalPrice = allCampTotal + allTicketsTotal + 99;

  const countDown = "00:00";
  const timeLeft = "Time left: " + countDown;

  const errorCamp = false;
  const errorTents = false;
  return (
    <section time-left={timeLeft} className="fixed -mx-mobile row-span-1 row-start-1 col-start-2 lg:mx-0 lg:relative after:absolute after:content-[attr(time-left)] after:-top-7 after:pb-2 after:px-4 after:left-0 after:bg-secondary after:font-rethink after:font-bold after:-z-20 bottom-0 after:text-main-2  w-full bg-main-2 border-y-2 lg:border-2 border-main-1 border-solid p-8 rounded-md ">
      <div className={`${openBasket ? "block" : "hidden"} lg:block`}>
        <h2 className="font-spicy text-main-1 text-4xl">Basket</h2>
        <article className="flex flex-col gap-2 my-2">
          <span className="font-rethink text-xs py-1 px-3 bg-secondary text-main-2 rounded-md font-semibold w-max">Tickets</span>
          {basketTickets //Sørg for kun at loope gennem billetter der er med i beregningen
            .filter((ticket) => ticket.itemMultiply > 0)
            .map((ticket, index) => {
              return <BasketItem key={index} itemTitle={ticket.itemTitle} itemMultiply={ticket.itemMultiply} itemPrice={ticket.itemPrice}></BasketItem>;
            })}
        </article>
        <article className="flex flex-col gap-2 my-2">
          <span className="font-rethink text-xs py-1 px-3 bg-secondary text-main-2 rounded-md font-semibold w-max">Camp</span>
          <span className="font-rethink text-xs text-feedback-error ">Please choose a camp</span>
          {basketCamp.map((camp, index) => {
            return <BasketItem key={index} itemTitle={camp.itemTitle} itemMultiply={camp.itemMultiply} itemPrice={camp.itemPrice}></BasketItem>;
          })}
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
        <button onClick={handleOpenBasket} className="lg:hidden">
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
      <div className="flex justify-between place-items-center">
        <h3 className={`${itemMultiply === 0 ? "hidden" : ""} font-bold`}>{itemMultiply}</h3>
        <RiAddLine className="origin-center rotate-45" />
        <p className="uppercase ">{itemTitle}</p>
      </div>
      <p>
        {itemPrice}
        {itemPrice === "" ? "" : ",-"}
      </p>
    </div>
  );
}
