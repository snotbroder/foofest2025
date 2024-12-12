"use client";
//Jeg kan ikke bruge server rendering, da jeg skal bruge komponenten inden i en client-side page(BookingPage),
//da page bruger useState til at holde styr på navigationen over steps

import CampingCards from "./CampingCards";
import { getSpots } from "../../api";
import { useState, useEffect } from "react";

export default function CampingPage({ setSelectedCamping, selectedCamping }) {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  //Erstat med SWR?
  //CHAT GPT
  useEffect(() => {
    async function fetchSpots() {
      try {
        const data = await getSpots(); // Fetch camping spots
        setSpots(data);
      } catch (error) {
        //Fallback
        console.error("Error fetching spots:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSpots();
  }, []); //Tomt array betyder det kun kører én gang når komponentent renderes, ellers ville det rendere konstant

  //Hvis der nu er sløv forbindelse
  if (loading) {
    return <p>Loading camping spots...</p>;
  }
  return (
    <div>
      <CampingCards selectedCamping={selectedCamping} setSelectedCamping={setSelectedCamping} spots={spots} />
    </div>
  );
}
