import { getBands } from "../api";
import BandCard from "./BandCard";

async function BandCards() {
  const BASE_URL = "https://gabby-dull-drip.glitch.me/logos/";
  const response = await fetch("https://gabby-dull-drip.glitch.me/bands", {
    // const BASE_URL = "http://localhost:8080/logos/";
    // const response = await fetch("http://localhost:8080/bands", {
    method: "GET",
  });
  const bands = await response.json();

  return (
    <div className="flex flex-wrap justify-center md:justify-between gap-10 mx-mobile lg:mx-desktop">
      {bands.map((band) => {
        const logo = band.logo.startsWith("http") ? band.logo : `${BASE_URL}${band.logo}`;
        return <BandCard alt={`Logo of ${band.name}`} key={band.name} imgSrc={logo} name={band.name} genre={band.genre} slug={band.slug} />;
      })}
    </div>
  );
}

export default BandCards;
