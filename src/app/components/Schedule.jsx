import { getSchedule } from "../api";
import ScheduleBox from "./ScheduleBox";

export default async function Schedule({ stage, day }) {
  // Fetch schedule data based on the stage and day
  const scheduleData = await getSchedule();
  const schedule = scheduleData?.[stage]?.[day] || [];

  return (
    <article className="-mx-mobile flex flex-col justify-center gap-4">
      {schedule.map((event, index) => (
        <ScheduleBox
          key={index}
          artist={event.act}
          startTime={event.start}
          endTime={event.end}
        />
      ))}
    </article>
  );
}
