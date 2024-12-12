// "use client";
import BandCards from "../components/BandCards";
import LineUpFilter from "../components/LineUpFilter";
import LineUpComponent from "../components/LineUpComponent";
// import { useState } from "react";

function Lineup() {
  // const [pickedGenre, setPickedGenre] = useState("Rap");

  return (
    <div className="">
      <div className="relative"></div>
      <div className="flex flex-col gap-16 pt-48">
        <h1 className="font-spicy text-6xl">Lineup 2025</h1>
        {/* <LineUpFilter pickedGenre={"jazz"} /> */}
        <LineUpComponent />
        {/* <BandCards></BandCards> */}
      </div>
    </div>
  );
}

export default Lineup;
