import "./main.css";
import Link from "next/link";
import ClickableCard2 from "./ClickableCard2";
import BurgerMenu from "./BurgerMenu";
export default function Home() {
  return (
    <>
      <BurgerMenu></BurgerMenu>
      <Link href="/" className="text-blue-700 hover:text-red-600 text-xl">
        Home
      </Link>
      <div className="hello">Sofies sandbox</div>
      <div className="flex flex-wrap justify-center gap-9">
        <ClickableCard2
          href="/schedule"
          headline="Schedule"
          text="Explore the full schedule to plan your perfect day and make sure you don’t miss your favorite performances!"
        ></ClickableCard2>
        <ClickableCard2
          href="/map"
          headline="Map"
          text="Navigate Foo Festival with ease! Explore the festival grounds and locate stages, food stalls, and facilities."
        ></ClickableCard2>
        <ClickableCard2
          href="/lineup"
          headline="Lineup"
          text="Discover the Foo Festival lineup! Check out all the artists performing and find your must-see acts."
        ></ClickableCard2>
      </div>
    </>
  );
}
