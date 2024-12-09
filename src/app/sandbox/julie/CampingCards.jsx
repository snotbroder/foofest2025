"use client";
import CampingCard from "./CampingCard";
import { useState } from "react";

function CampingCards({ spots }) {
  const [selectedCamping, setSelectedCamping] = useState("");
  return (
    <section>
      <div className="flex-wrap md:justify-start justify-center flex gap-10">
        {spots.map((spot) => {
          return (
            <CampingCard
              key={spot.area}
              area={spot.area}
              space={spot.available}
              setSelectedCamping={setSelectedCamping}
              selectedCamping={selectedCamping}
            />
          );
        })}
      </div>
    </section>
  );
}

export default CampingCards;
