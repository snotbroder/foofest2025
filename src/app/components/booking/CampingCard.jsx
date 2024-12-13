"use client";

import { reserveSpot } from "@/app/api";
import { useState } from "react";

function CampingCard({ area, space, info, setSelectedCamping, selectedCamping, availableTicketsAmount }) {
  const [reserveId, setReserveId] = useState(null);

  const areaReserved = selectedCamping;
  const amount = availableTicketsAmount;

  function reserveSpotHandler(areaReserved, amount) {
    async function reserve() {
      const data = await reserveSpot(areaReserved, amount);
      setReserveId(data["id"]);
      console.log("data: ", data["id"]);
    }

    reserve();
  }

  return (
    <div
      onClick={() => {
        if (space !== 0) {
          setSelectedCamping(() => area);
          reserveSpotHandler(areaReserved, amount);
        } else alert("There is no availability at desired camp");
      }} //space === 0 ? "bg-feedback-disabled-2 border-feedback-disabled-1" : "border-main-1"
      className={` ${selectedCamping === area ? "bg-main-2 border-solid border-main-1 border-2 after:bg-transparent" : "bg-primary"} flex flex-col gap-2 p-6 w-48 h-36 cursor-pointer after:bg-main-1 relative after:absolute after:top-0 after:left-0 after:-z-10 after:content-[''] after:w-full after:h-full after:ml-1 after:mt-1 hover:after:mt-0 hover:after:ml-0 after:transition-all after:duration-75 hover:outline-1 hover:outline-main-1 hover:text-main-1 hover:transition-all `}
    >
      <h3 className="font-rethink font-semibold">{area}</h3>
      <p>{info}</p>
      <h4 className={`font-rethink  ${space === 0 ? "text-feedback-error" : "text-main-1"}`}>{space} spaces available</h4>
      <h4>{reserveId}</h4>
    </div>
  );
}

export default CampingCard;
