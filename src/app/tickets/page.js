// export const metadata = {
//   title: "Tickets",
//   description: "This is the ticket page",
// };

import TicketCard from "../components/TicketCard";
import TicketCards from "../components/TicketCards";
import Head from "next/head";

function Page() {
  return (
    <>
      <article>
        <h1 className="font-spicy mb-12">Available tickets</h1>
        <div>
          <TicketCards />
        </div>
        <img href="\illustrations\lp.svg"></img>
      </article>
    </>
  );
}

export default Page;
