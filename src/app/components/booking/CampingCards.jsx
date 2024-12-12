"use client";
import CampingCard from "./CampingCard";

function CampingCards({ spots, setSelectedCamping, selectedCamping, availableTicketsAmount }) {
  return (
    <section>
      <div className="flex flex-col place-items-center md:justify-center lg:justify-normal gap-2 lg:flex-row lg:flex-wrap ">
        {spots.map((spot) => {
          return <CampingCard availableTicketsAmount={availableTicketsAmount} key={spot.area} area={spot.area} space={spot.available} setSelectedCamping={setSelectedCamping} selectedCamping={selectedCamping} />;
        })}
      </div>
    </section>
  );
}

export default CampingCards;
