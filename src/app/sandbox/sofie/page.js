import "./main.css";
import ClickableCard1 from "./ClickableCard1";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Link href="/" className="text-blue-700 hover:text-red-600 text-xl">
        Home
      </Link>
      <div className="hello">Sofies sandbox</div>
      <div className="flex gap-32 flex-wrap">
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
          text="As a volunteer, you’ll be part of the magic—setting up, guiding guests, and keeping the festival running smoothly. In return, you’ll get free entry, official merch, and a chance to meet amazing people while gaining valuable experience."
        ></ClickableCard1>
      </div>
    </>
  );
}
