// import { getSchedule, getBands } from "../api";
// import ScheduleBox from "./ScheduleBox";
// import { IoMdArrowDropdown } from "react-icons/io";
// import "../globals.css";

// async function Schedule() {
//   const scheduleData = await getSchedule();
//   const schedule = scheduleData.Jotunheim.mon;

//   //   let listOfScenes = [];

//   //   for (let scene in scheduleData) {
//   //     listOfScenes.push(scene);
//   //   }

//   //   console.log(listOfScenes);
//   //   console.log(bands);
//   //   const bands = await getBands();
//   //   console.log(bands);

//   return (
//     <article className=" -mx-mobile flex flex-col justify-center gap-4">
//       {schedule.map((event) => {
//         return (
//           <ScheduleBox
//             key={event.index}
//             artist={event.act}
//             startTime={event.start}
//             endTime={event.end}
//           />
//         );
//       })}
//     </article>
//   );
// }

// export default Schedule;
"use client";

import { useState } from "react";
import useSWR from "swr";
import ScheduleBox from "./ScheduleBox";
import ScheduleFilter from "./ScheduleFilter";

const fetcher = (url) => fetch(url).then((res) => res.json());

function Schedule() {
  const {
    data: scheduleData,
    error,
    isLoading,
  } = useSWR("http://localhost:8080/schedule", fetcher);

  const [pickedDay, setPickedDay] = useState("mon");
  const [pickedStage, setPickedStage] = useState("Midgard");

  if (error) return <div>Error loading schedule: {error.message}</div>;
  if (isLoading) return <div>Loading schedule...</div>;

  const schedule = scheduleData?.[pickedStage]?.[pickedDay] || [];

  return (
    <article className=" -mx-mobile flex flex-col justify-center gap-4">
      <ScheduleFilter
        setPickedDay={setPickedDay}
        setPickedStage={setPickedStage}
        pickedDay={pickedDay}
        pickedStage={pickedStage}
      />
      {schedule.map((event, index) => {
        return (
          <div key={index}>
            <ScheduleBox
              artist={event.act}
              startTime={event.start}
              endTime={event.end}
            />
          </div>
        );
      })}
    </article>
  );
}

export default Schedule;
