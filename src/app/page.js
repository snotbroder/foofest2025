import ClickableCard2 from "../app/components/ClickableCard2";
import BandCard from "../app/components/BandCard";
import Accordion from "../app/components/Accordion";
import CtaButton from "../app/components/CtaButton";
import Link from "next/link";
import Image from "next/image";
import Hero from "../app/components/Hero";
async function Home() {
  const BASE_URL = "http://localhost:8080/logos/";
  const response = await fetch("https://sudsy-jet-grill.glitch.me/bands", {
    method: "GET",
  });
  const bands = await response.json();

  return (
    <section className="flex flex-col gap-32 md:gap-48 ">
      <Hero />

      <section className="flex flex-col items-center gap-28">
        <div className="flex flex-wrap justify-center gap-4 items-center relative  md:gap-10 ">
          <div className="absolute -z-10 -top-36 left-0 mx-auto opacity-60 xl:-left-28">
            <Image
              src="illustrations/svg/flower2Pink.svg"
              width={250}
              height={250}
              objectFit="cover"
              alt="Pink Flower"
            ></Image>
          </div>
          <div className="absolute -left-10  top-28  xl:-left-20 -z-10 mx-auto   opacity-60 ">
            <Image
              src="illustrations/svg/flower2Pink.svg"
              width={150}
              height={150}
              objectFit="cover"
              alt="Small Pink Flower"
            ></Image>
          </div>
          <ClickableCard2
            headline="Schedule"
            text=" Check out the full schedule and don't miss any moment of the festival"
            href="/schedule"
          ></ClickableCard2>
          <ClickableCard2
            headline="Map"
            text=" Find your way around the Foo Festival with our easy-to-follow map."
            href="/map"
          ></ClickableCard2>
          <ClickableCard2
            headline="Lineup"
            text=" Check out our amazing lineup of bands and performers, and don't miss your favourite artists "
            href="/lineup"
          ></ClickableCard2>
        </div>
        <div>
          <CtaButton href="/tickets" text="Buy Ticket"></CtaButton>
        </div>
      </section>
      <section
        className="relative flex flex-col items-center
      before:h-[0.5px] before:bg-main-1 before:w-full  before:content-[''] before:absolute after:absolute after:w-full after:h-[0.5px] after:bg-main-1 after:content-[''] after:-bottom-20"
      >
        <div className="py-14 mx-mobile gap-6 lg:mx-desktop flex flex-col ">
          <h2 className=" text-center lg:text-start">Line up 2025</h2>

          <div className="flex flex-wrap justify-center lg:justify-between gap-6 ">
            {bands.length > 0 &&
              bands.slice(0, 4).map((band) => {
                const logo = band.logo.startsWith("http")
                  ? band.logo
                  : `${BASE_URL}${band.logo}`;
                return (
                  <BandCard
                    alt={`Logo of ${band.name}`}
                    key={band.name}
                    imgSrc={logo}
                    name={band.name}
                    genre={band.genre}
                    slug={band.slug}
                  />
                );
              })}
          </div>
        </div>
        <div className="relative ">
          <CtaButton href="/lineup" text="See lineup"></CtaButton>
        </div>
      </section>
      <section
        className="flex flex-col items-center py-40 
  bg-[url('/img/filterbg.webp'),url('/illustrations/svg/circle.svg')] 
  bg-repeat 
  bg-[top_center] bg-[contain]
  lg:-mx-desktop -mx-mobile border-t-2 border-b-2 border-tertiary"
      >
        <div className="mx-auto lg:w-full max-w-[700px] px-4 md:px-0">
          <h2 className=" ">News</h2>

          <div className="flex flex-col gap-12 items-center lg:items-start">
            <article className="bg-tertiary shadow-custom flex flex-col items-start gap-3 text-pretty w-[15rem] p-3 lg:w-[44rem]">
              <Image
                className="h-2/3"
                src="/img/tshirt.webp"
                width={700}
                height={700}
                objectFit="cover"
                alt="Foo Festival T-shirt"
              ></Image>
              <h3 className="">Buy the t-shirt of this year’s festival</h3>
              <p>
                Get your official Foo Festival T-shirt and keep the peace, love,
                and music alive wherever you go
              </p>
            </article>
            <div className="flex flex-col md:flex-row gap-16 mb-9">
              <article className="bg-tertiary p-3 shadow-custom flex  text-pretty flex-col gap-3   w-[15rem] lg:w-[20rem]">
                <Image
                  src="/img/quiz.webp"
                  width={300}
                  height={300}
                  objectFit="cover"
                  alt="Quiz poster"
                ></Image>
                <h3>Join the quiz and win a free ticket</h3>
                <p>
                  Think you know your music trivia? Test your knowledge in our
                  quiz for a chance to win a ticket to Foo Festival 2024!
                </p>
              </article>
              <Link href="/volunteer">
                <article className="bg-tertiary p-3 shadow-custom flex flex-col text-pretty gap-3 w-[15rem] lg:w-[20rem] h-full ">
                  <Image
                    src="/img/volunteer.webp"
                    width={300}
                    height={300}
                    objectFit="cover"
                    alt="Volunteer poster"
                  ></Image>
                  <h3>Become a volunteer</h3>
                  <p>
                    Volunteer with us! Enjoy free entry, merch, and
                    unforgettable experiences while helping the festival run
                    smoothly.
                  </p>
                </article>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Accordion></Accordion>
      </section>
    </section>
  );
}

export default Home;
