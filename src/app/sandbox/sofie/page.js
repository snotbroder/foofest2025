import "./main.css";
import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
export default function Home() {
  return (
    <>
      <BurgerMenu></BurgerMenu>
      <Link href="/" className="text-blue-700 hover:text-red-600 text-xl">
        Home
      </Link>
      <div className="hello">Sofies sandbox</div>
    </>
  );
}
