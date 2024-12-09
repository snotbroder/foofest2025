import CampingPage from "@/app/components/booking/CampingPage";
import Benefits from "@/app/components/Benefits";
import Accordion from "@/app/components/Accordion";
import "./main.css";
import Link from "next/link";
import Schedule from "@/app/components/Schedule";
import "./main.css";
import SchedulePage from "@/app/components/SchedulePage";
import TicketCards from "@/app/components/TicketCards";
export default function Home() {
  return (
    <>
      <Link href="/" className="text-blue-700 hover:text-red-600 text-xl">
        Home
      </Link>
      {/* <div className="hello">Julies sandbox</div> */}
      <SchedulePage />
      <Schedule />

      <CampingPage />

      <TicketCards />
      <Benefits />
      <Accordion />
    </>
  );
}
