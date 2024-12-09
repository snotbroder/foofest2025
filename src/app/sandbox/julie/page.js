import Benefits from "./Benefits";
import Accordion from "./componentsJulie/Accordion";
import "./main.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/" className="text-blue-700 hover:text-red-600 text-xl">
        Home
      </Link>
      <div className="hello">Julies sandbox</div>
      <Benefits />
      <Accordion />
    </>
  );
}
