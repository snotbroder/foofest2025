"use client";
import Image from "next/image";
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
  } = useSWR("https://sudsy-jet-grill.glitch.me/schedule", fetcher);

  const [pickedDay, setPickedDay] = useState("mon");
  const [pickedStage, setPickedStage] = useState("Midgard");

  if (error) return <div>Error loading schedule: {error.message}</div>;
  if (isLoading) return <div>Loading schedule...</div>;

  const schedule = scheduleData?.[pickedStage]?.[pickedDay] || [];

  return (
    <article className="-mx-mobile flex flex-col justify-center gap-4 ">
      <ScheduleFilter
        setPickedDay={setPickedDay}
        setPickedStage={setPickedStage}
        pickedDay={pickedDay}
        pickedStage={pickedStage}
      />
      <div className="mt-8">
        {schedule.map((event, index) => {
          return (
            <div key={index}>
              <ScheduleBox
                artist={event.act}
                startTime={event.start}
                endTime={event.end}
                stage={pickedStage}
              />
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default Schedule;
