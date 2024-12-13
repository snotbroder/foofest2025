import TicketCard from "../components/TicketCard";
import TicketCards from "../components/TicketCards";

function page() {
  return (
    <article>
      <h1 className="font-spicy mb-12">Available tickets</h1>
      <div>
        <TicketCards />
      </div>
      <img href="\illustrations\lp.svg"></img>
    </article>
  );
}

export default page;
