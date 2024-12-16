import { getBands } from "../api";
import BandCard from "./BandCard";

async function BandCards() {
  const BASE_URL = "https://sudsy-jet-grill.glitch.me/";
  const response = await fetch("https://sudsy-jet-grill.glitch.me/bands", {
    method: "GET",
  });
  const bands = await response.json();

  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-10 mx-mobile lg:mx-desktop">
      {bands.map((band) => {
        // const bandImage = bandImagePath.startsWith("https://picsum") ? matchingBand.logo
        // : `${endpointBase}/logos/${matchingBand.logo}`;
        const logo = band.logo.startsWith("https://source.unsplash") ? band.logo : `${BASE_URL}/logos/${band.logo}`;

        return <BandCard alt={`Logo of ${band.name}`} key={band.name} imgSrc={logo} name={band.name} genre={band.genre} slug={band.slug} />;
      })}
    </div>
  );
}

export default BandCards;
