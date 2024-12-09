"use client";
import { useState } from "react";
import Schedule from "../components/Schedule";

function Page() {
  const [pickedDay, setPickedDay] = useState("mon");
  const [pickedStage, setPickedStage] = useState("MidGard");

  return (
    <div>
      <h1 className="font-spicy text-4xl text-main-1">Schedule</h1>

      <select
        className="custom-selector inline-block justify-self-center"
        name="stages"
        id="stages"
        value={pickedStage}
        onChange={(e) => setPickedStage(e.target.value)}
      >
        <option value="MidGard">MidGard</option>
        <option value="Jotunheim">Jotunheim</option>
        <option value="Vanaheim">Vanaheim</option>
      </select>

      <div className="list-none flex gap-4">
        <li
          className={`text-main-1 font-semibold ${
            pickedDay === "mon" ? "text-accent" : ""
          }`}
          onClick={() => {
            setPickedDay("mon");
          }}
        >
          MON
        </li>
        <li
          className={pickedDay === "thu" ? "text-accent" : ""}
          onClick={() => {
            setPickedDay("thu");
          }}
        >
          THU
        </li>
        {/* Add other days similarly */}
      </div>
      <Schedule stage={pickedStage} day={pickedDay} />
    </div>
  );
}

export default Page;
