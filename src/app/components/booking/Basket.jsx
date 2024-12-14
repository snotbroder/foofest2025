"use client";

import { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import { useBasketStore } from "@/stores/basket-stores";

function Basket() {
  //Toggle button for mobile
  const [openBasket, setOpenBasket] = useState(false);
  function handleOpenBasket() {
    setOpenBasket((prevState) => !prevState);
  }

  const ticketInfo = useBasketStore((state) => state.ticketInfo);
  const campInfo = useBasketStore((state) => state.campInfo);
  const chosenCamp = useBasketStore((state) => state.chosenCamp);

  // Omregn priser fra billetter og telte til totalpris
  // fundet hjælp herfra med for https://bito.ai/resources/javascript-calculate-total-price-javascript-explained/
  const reservationFee = 99;
  const ticketTotal = ticketInfo.reduce((total, ticket) => total + ticket.itemPrice * ticket.itemMultiply, 0);

  const campTotal = campInfo.reduce((total, camp) => total + camp.itemPrice * camp.itemMultiply, 0);
  const totalPrice = ticketTotal + campTotal + reservationFee;

  const countDown = "00:00";
  const timeLeft = "Time left: " + countDown;

  const errorCamp = false;
  const errorTents = false;
  return (
    <section time-left={timeLeft} className="fixed max-h-max -mx-mobile row-span-1 row-start-1 col-start-2 lg:mx-0 lg:relative after:absolute after:content-[attr(time-left)] after:-top-7 after:pb-2 after:px-4 after:left-0 after:bg-secondary after:font-rethink after:font-bold after:-z-20 bottom-0 after:text-main-2  w-full bg-main-2 border-y-2 lg:border-2 border-main-1 border-solid p-8 rounded-rounded-reg ">
      <div className={`${openBasket ? "block" : "hidden"} lg:block`}>
        <h2 className="font-spicy">Basket</h2>
        <article className="flex flex-col gap-2 my-2">
          <p className="font-rethink small text-main-1 py-1 border-b-[1px] border-tertiary border-solid  font-semibold w-max">Tickets</p>
          {
            //Tjek on nogen af billetterne har itemMultiply value 0, så vis det her
            ticketInfo.every((ticket) => ticket.itemMultiply === 0) && <p className="font-rethink small text-feedback-error">Please choose a ticket</p>
          }

          {ticketInfo //Sørg for kun at loope gennem billetter der er med i beregningen, altså har en itemMultiply value over 0
            .filter((ticket) => ticket.itemMultiply > 0)
            .map((ticket, index) => {
              return <BasketItem key={index} itemTitle={ticket.itemTitle} itemMultiply={ticket.itemMultiply} itemPrice={ticket.itemPrice}></BasketItem>;
            })}
        </article>

        <article className="flex flex-col gap-2 my-2">
          <p className="font-rethink small py-1 border-b-[1px] border-tertiary border-solid text-main-1 font-semibold w-max">Camp</p>

          <h4 className="font-rethink">
            Selected camp:{" "}
            <span className="font-normal">
              {chosenCamp} {chosenCamp === "" && <p className="font-rethink small text-feedback-error "> Please choose a camp</p>}
            </span>
          </h4>
          {campInfo
            .filter((camp) => camp.itemMultiply > 0)
            .map((camp, index) => {
              return <BasketItem key={index} itemTitle={camp.itemTitle} itemMultiply={camp.itemMultiply} itemPrice={camp.itemPrice}></BasketItem>;
            })}
        </article>

        <article className="font-rethink text-main-1 border-b-2 border-b-tertiary border-b-solid pb-2 my-1 mb-4 flex justify-between">
          <h4 className="font-bold">Reservation fee</h4>
          <h4 className="">99,-</h4>
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
  return (
    <div className="font-rethink text-main-1 border-b-2 border-b-tertiary border-b-solid my-1 pb-2 flex justify-between">
      <div className="flex justify-between place-items-center">
        <h4 className={`${itemMultiply === 0 ? "hidden" : ""} font-bold`}>{itemMultiply}</h4>
        <RiAddLine className="origin-center rotate-45" />
        <h4 className="uppercase ">{itemTitle}</h4>
      </div>
      <h4>
        {itemPrice}
        {itemPrice === "" ? "" : ",-"}
      </h4>
    </div>
  );
}
