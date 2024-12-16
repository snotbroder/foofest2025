import Image from "next/image";
import BandCard from "@/app/components/BandCard";
import ScheduleForBand from "@/app/components/ScheduleForBand";

async function Band({ params }) {
  const { slug } = await params;
  const BASE_URL = "https://gabby-dull-drip.glitch.me/logos/";

  const response = await fetch(`https://gabby-dull-drip.glitch.me/bands/${slug}`);
  const band = await response.json();

  const responseBands = await fetch(`https://gabby-dull-drip.glitch.me/bands`);
  const allBands = await responseBands.json();

  //filtrerer bands efter samje genre
  let similarBands = allBands.filter(
    (b) =>
      b.genre.toLowerCase().trim() === band.genre.toLowerCase().trim() && //tjekker om genren er ebs
      b.slug !== band.slug //sørger for at det samme band ikke bliver vist
  );
  //betingelse som tjekker om antallet af bands i sammme genre er mindre end
  if (similarBands.length < 4) {
    const remainingCount = 4 - similarBands.length; //regner ud hvor mange der mangler for at få et array mmed fire

    // laver en liste som bruges til at vælge tilfældige bands
    const availableBands = allBands.filter((b) => !similarBands.includes(b) && b.slug !== band.slug);
    //for hver band der mangler for at få fire vælges bands fra availableBands listen
    for (let i = 0; i < remainingCount; i++) {
      const randomBand = availableBands[Math.floor(Math.random() * availableBands.length)];
      similarBands.push(randomBand); //de forksellige bands bliver tilføjet til similarBands
      availableBands.splice(availableBands.indexOf(randomBand), 1);
    }
  }

  const scheduleResponse = await fetch(`https://gabby-dull-drip.glitch.me/schedule`);
  const schedule = await scheduleResponse.json();

  //få fat i alle billederne, hvis de mangler http bliver det tilføjet
  const logo = band.logo.startsWith("http") ? band.logo : `${BASE_URL}${band.logo}`;

  return (
    <section className="flex font-rethink flex-col gap-20 lg:gap-36">
      <div className="lg:-mx-desktop -mx-mobile w-screen flex flex-col justify-end items-center" style={{ position: "relative", width: "100vw", height: "400px" }}>
        <div className="z-20 text-main-2 font-spicy pb-6 text-6xl ">
          <h3>{band.name}</h3>
        </div>

        <Image src={logo} alt={`Logo of ${band.name}`} fill style={{ objectFit: "cover" }} />
      </div>
      <div className=" relative md:mt-0 gap-11 flex flex-col lg:gap-24 lg:flex-row md:gap-24 ">
        <div className="w-100vw lg:w-2/3 xl:w-5/6 lg:max-w-screen-md bg-secondary -mt-20 -mx-mobile p-11 lg:-mx-0.5 rounded-md font-rethink text-main-1 flex flex-col gap-4">
          <h1 className="text-2xl font-bold ">About</h1>
          <p className="text-base">{band.bio}</p>
        </div>
        <div className="flex flex-col gap-8  ">
          <ScheduleForBand schedule={schedule} bandName={band.name} band={band} />
        </div>
      </div>
      <div className="flex flex-col gap-10 before:content[''] before:w-full before:h-[2px] before:bg-feedback-disabled-1 after:content[''] after:w-full after:h-[2px] after:bg-feedback-disabled-1 ">
        <h3 className="text-2xl font-bold text-center">You might also like</h3>
        <div className="flex flex-wrap relative justify-center md:justify-between gap-10 ">
          {similarBands.length > 0 ? (
            similarBands.map((similarBand) => {
              const logo = similarBand.logo.startsWith("http") ? similarBand.logo : `${BASE_URL}${similarBand.logo}`;

              return <BandCard alt={`Logo of ${similarBand.name}`} key={similarBand.slug} imgSrc={logo} name={similarBand.name} genre={similarBand.genre} slug={similarBand.slug} />;
            })
          ) : (
            <p>No similar bands found</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Band;
