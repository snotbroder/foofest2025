import ClickableCard2 from "../components/ClickableCard2";
import BandCard from "../components/BandCard";
import ClickableCard1 from "../components/ClickableCard1";
async function Home() {
  const BASE_URL = "http://localhost:8080/logos/";
  const response = await fetch("http://localhost:8080/bands", {
    method: "GET",
  });
  const bands = await response.json();

  return (
    <section className="flex flex-col gap-32 md:gap-48 -mt-16">
      <section className="bg-[url('/illustrations/patternHero.svg')] bg-cover -mx-mobile lg:-mx-desktop ">
        <div className="py-80 mx-mobile lg:mx-desktop">
          <h1 className=" display font-spicy">Foo Festival 2025</h1>
          <p className="font-rethink">
            Where Music Meets Peace, Love, and Groovy Vibes&nbsp;
            <time className="font-bold">July 7th - 13th</time>
          </p>
        </div>
      </section>
      <section
        className="flex flex-col gap-4 items-center relative md:flex-row md:items-stretch md:justify-center md:gap-10 before:content-[url('/illustrations/flower2Green.svg')] before:absolute before:-z-10 before:-top-44 before:left-11 before:opacity-60 
     "
      >
        <ClickableCard2
          headline="Schedule"
          text=" Check out the full schedule and don't miss any moment of the festival"
          href=""
        ></ClickableCard2>
        <ClickableCard2
          headline="Map"
          text=" Find your way around the Foo Festival with our easy-to-follow map. Discover all the stages, food trucks, and relaxation zones scattered across the festival grounds"
          href=""
        ></ClickableCard2>
        <ClickableCard2
          headline="Lineup"
          text=" Check out our amazing lineup of bands and performers. From rock to indie, there's something for everyone. Be ready for unforgettable performances"
          href=""
        ></ClickableCard2>
      </section>
      <section className=" bg-secondary -mx-mobile lg:-mx-desktop">
        <div className="py-12 mx-mobile gap-6 lg:mx-desktop flex flex-col items-center lg:items-start">
          <h2 className="font-bold">Line up 2025</h2>

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
      </section>
      <section className="flex flex-col gap">
        <h2 className="font-bold ">News</h2>
        <div className="flex justify-between">
          <ClickableCard1
            header="Buy the t-shirt of this year’s festival"
            text="Embrace the groove and wear the love! Get your official Foo Festival T-shirt and keep the peace, love, and music alive wherever you go"
            src="/img/tshirt.webp"
            alt=""
          ></ClickableCard1>
          <ClickableCard1
            header="Join the quiz and win a free ticket"
            text="Think you know your music trivia? Test your knowledge in our quiz for a chance to win a ticket to Foo Festival 2024! Don't miss out on the fun—peace, love, and music await"
            src="/img/musicquiz.webp"
            alt=""
          ></ClickableCard1>
          <ClickableCard1
            header="Become a volunteer"
            text="As a volunteer, you’ll be part of the magic—setting up, guiding guests, and keeping the festival running smoothly. In return, you’ll get free entry, official merch, and a chance to meet amazing people while gaining valuable experience."
            src="/img/volunteerPoster.webp"
            alt=""
          ></ClickableCard1>
        </div>
      </section>
    </section>
  );
}

export default Home;
