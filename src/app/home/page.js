import ClickableCard2 from "../components/ClickableCard2";
import BandCard from "../components/BandCard";
import Accordion from "../components/Accordion";
import Image from "next/image";
async function Home() {
  const BASE_URL = "http://localhost:8080/logos/";
  const response = await fetch("http://localhost:8080/bands", {
    method: "GET",
  });
  const bands = await response.json();

  return (
    <section className="flex flex-col gap-32 md:gap-48 -mt-16 ">
      <section className="bg-[url('/illustrations/patternHero.svg')] bg-cover -mx-mobile lg:-mx-desktop -mt-10">
        <div className="py-80 mx-mobile lg:mx-desktop">
          <h1 className=" display font-spicy">Foo Festival 2025</h1>
          <p className="font-rethink">
            Where Music Meets Peace, Love, and Groovy Vibes&nbsp;
            <time className="font-bold">July 7th - 13th</time>
          </p>
        </div>
      </section>
      <section className="flex flex-wrap justify-center gap-4 items-center relative  md:gap-10 ">
        <div className="absolute -z-10 -top-36 -left-20 mx-auto xl:left-20 xl:-top-24 opacity-60">
          <Image
            src="illustrations/svg/flower2Pink.svg"
            width={250}
            height={250}
            objectFit="cover"
          ></Image>
        </div>
        <div className="absolute -left-20 top-28 -z-10 mx-auto xl:left-20 xl:bottom-0 opacity-60">
          <Image
            src="illustrations/svg/flower2Pink.svg"
            width={150}
            height={150}
            objectFit="cover"
          ></Image>
        </div>
        <ClickableCard2
          headline="Schedule"
          text=" Check out the full schedule and don't miss any moment of the festival"
          href=""
        ></ClickableCard2>
        <ClickableCard2
          headline="Map"
          text=" Find your way around the Foo Festival with our easy-to-follow map."
          href=""
        ></ClickableCard2>
        <ClickableCard2
          headline="Lineup"
          text=" Check out our amazing lineup of bands and performers, and don't miss your favourite artists "
          href=""
        ></ClickableCard2>
      </section>
      <section
        className="relative 
      before:h-[0.5px] before:bg-main-1 before:w-full  before:content-[''] before:absolute"
      >
        <div className="py-14 mx-mobile gap-6 lg:mx-desktop flex flex-col ">
          <h2 className="font-bold text-center lg:text-start">Line up 2025</h2>

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
        <div className="relative after:absolute after:content-[''] after:w-full after:h-[0.5px] after:bg-main-1 after:-bottom-8"></div>
      </section>
      <section className="flex flex-col items-center py-40 bg-[url('/illustrations/svg/circle.svg')] bg-repeat bg-top bg-container lg:-mx-desktop -mx-mobile bg-opacity-20 ">
        <div className="mx-auto lg:w-full max-w-[700px] px-4 md:px-0">
          <h2 className="font-bold ">News</h2>

          <div className="flex flex-col gap-12 items-center lg:items-start">
            <article className="bg-tertiary shadow-custom flex flex-col items-start gap-3 text-pretty w-[400px] p-3 md:w-[700px]">
              <Image
                className="h-2/3"
                src="/img/tshirt.webp"
                width={700}
                height={700}
                objectFit="cover"
                alt="Foo Festival T-shirt"
              ></Image>
              <h3 className="font-bold">
                Buy the t-shirt of this year’s festival
              </h3>
              <p>
                Get your official Foo Festival T-shirt and keep the peace, love,
                and music alive wherever you go
              </p>
            </article>
            <div className="flex flex-col md:flex-row gap-16 mb-9">
              <article className="bg-tertiary p-3 shadow-custom flex  text-pretty flex-col gap-3  w-64 md:w-80">
                <Image
                  src="/img/quiz.webp"
                  width={300}
                  height={300}
                  objectFit="cover"
                  alt="Quiz poster"
                ></Image>
                <h3 className="font-bold">
                  Join the quiz and win a free ticket
                </h3>
                <p>
                  Think you know your music trivia? Test your knowledge in our
                  quiz for a chance to win a ticket to Foo Festival 2024!
                </p>
              </article>
              <article className="bg-tertiary p-3 shadow-custom flex flex-col text-pretty gap-3  w-64 md:w-80">
                <Image
                  src="/img/volunteer.webp"
                  width={300}
                  height={300}
                  objectFit="cover"
                  alt="Volunteer poster"
                ></Image>
                <h3 className="font-bold">Become a volunteer</h3>
                <p>
                  Volunteer with us! Enjoy free entry, merch, and unforgettable
                  experiences while helping the festival run smoothly.
                </p>
              </article>
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
