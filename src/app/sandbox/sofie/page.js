import "./main.css";
import BandCard from "../../components/BandCard";
import Footer from "../../components/layout-components/Footer";
import ClickableCard1 from "../../components/ClickableCard1";
import Link from "next/link";
import ClickableCard2 from "../../components/ClickableCard2";
import BurgerMenu from "../../components/layout-components/BurgerMenu";
export default function Home() {
  return (
    <>
      <BurgerMenu></BurgerMenu>
      <Link href="/" className="text-blue-700 hover:text-red-600 text-xl">
        Home
      </Link>
      <div className="hello">Sofies sandbox</div>
      <div className="flex-wrap flex justify-center gap-12">
        <BandCard imgSrc="/img/led-zeppelin.jpg" name="Led Zeppelin"></BandCard>
        <BandCard imgSrc="/img/led-zeppelin.jpg" name="Led Zeppelin"></BandCard>
        <BandCard imgSrc="/img/led-zeppelin.jpg" name="Led Zeppelin"></BandCard>
        <BandCard imgSrc="/img/led-zeppelin.jpg" name="Led Zeppelin"></BandCard>
      </div>
      <Footer></Footer>
      <div className="flex gap-32 flex-wrap justify-center">
        <ClickableCard1
          src="/tshirt.webp"
          header="Buy the t-shirt of this year’s festival"
          text="Embrace the groove and wear the love! Get your official Foo Festival T-shirt and keep the peace, love, and music alive wherever you go"
        ></ClickableCard1>
        <ClickableCard1
          src="/musicquiz.webp"
          header="Join the quiz and win a free ticket"
          text="Think you know your music trivia? Test your knowledge in our quiz for a chance to win a ticket to Foo Festival 2024! Don't miss out on the fun—peace, love, and music await"
        ></ClickableCard1>
        <ClickableCard1
          src="/volunteerPoster.webp"
          header="Become a volunteer"
          text="As a volunteer, you’ll get free entry, official merch, and a chance to meet amazing people while gaining valuable experience."
        ></ClickableCard1>
      </div>
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
