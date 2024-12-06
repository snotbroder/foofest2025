import Accordion from "./componentsJulie/Accordion";
import "./main.css";
import Link from "next/link";
i;
export default function Home() {
  return (
    <>
      <Link href="/" className="text-blue-700 hover:text-red-600 text-xl">
        Home
      </Link>
      <div className="hello">Julies sandbox</div>
      <Accordion />
    </>
  );
}
