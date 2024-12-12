import BandCards from "../components/BandCards";
function Lineup() {
  return (
    <div className="">
      <div className="relative"></div>
      <div className="flex flex-col gap-16 pt-48">
        <h1 className="font-spicy text-6xl">Lineup 2025</h1>
        <div className="bg-secondary -mx-mobile lg:-mx-desktop pt-16 mt-10 md:mt-40">
          <BandCards></BandCards>
        </div>
      </div>
    </div>
  );
}

export default Lineup;
