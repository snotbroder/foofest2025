"use client";
import { useState } from "react";
import Schedule from "../components/Schedule";
function page() {
  // const scheduleData = await getSchedule();
  // const schedule = scheduleData.stage.day;

  // const scheduleData = await getSchedule();
  // const schedule = scheduleData.stage.day;
  const [pickedDay, setPickedDay] = useState("");
  const [pickedStage, setPickedStage] = useState("");

  return (
    <div>
      <h1 className="font-spicy text-4xl text-main-1">Schedule</h1>

      <select
        className="custom-selector inline-block justify-self-center"
        name="stages"
        id="stages"
      >
        <option value="MidGard">MidGard</option>
        <option value="Jotunheim">Jotunheim</option>
        <option value="Vanaheim">Vanaheim</option>
      </select>

      <div className="list-none flex gap-4">
        <li className="text-main-1 font-semibold">MAN</li>
        <li
          onClick={() => {
            setPickedDay("mon");
            setPickedStage("MidGard");
          }}
        >
          THU
        </li>
        <li>WEN</li>
        <li>THR</li>
        <li>FRI</li>
        <li>SAT</li>
        <li>SUN</li>
      </div>
      <Schedule />
    </div>
  );
}

export default page;
