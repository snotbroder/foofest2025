import "./main.css";
import Link from "next/link";
import TicketSelectCard from "./TicketSelectCard";
export default function Home() {
  return (
    <>
      <Link href="/" className="text-blue-700 hover:text-red-600 text-xl">
        Home
      </Link>
      <div className="hello">Joris' sandbox</div>

      <TicketSelectCard ticketName="VIP TICKET" variant="type1" price="1299" subText="Best Offer"></TicketSelectCard>
      <br></br>
      <TicketSelectCard ticketName="REGULAR TICKET" variant="type2" price="799"></TicketSelectCard>
    </>
  );
}
