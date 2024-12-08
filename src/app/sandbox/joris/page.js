import Basket from "./Basket";
import "./main.css";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Link href="/" className="text-blue-700 hover:text-red-600 text-xl">
        Home
      </Link>
      <div className="hello">Joris' sandbox</div>
      <main className="grid grid-cols-1 lg:grid-cols-3">
        <div></div>
        <div></div>
        <div className="-mx-mobile lg:mx-0">
          <Basket></Basket>
        </div>
      </main>
    </>
  );
}
