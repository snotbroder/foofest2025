import CampingCards from "./CampingCards";
import CampingPage from "./CampingPage";
import Benefits from "./Benefits";
import Accordion from "./componentsJulie/Accordion";
import "./main.css";
import Link from "next/link";
import TicketCard from "./TicketCard";
import TicketCards from "./TicketCards";

export default function Home() {
  return (
    <>
      <Link href="/" className="text-blue-700 hover:text-red-600 text-xl">
        Home
      </Link>
      <div className="hello">Julies sandbox</div>

      <CampingPage />

      <TicketCards />
      <Benefits />
      <Accordion />
    </>
  );
}
