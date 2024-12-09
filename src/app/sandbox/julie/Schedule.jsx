import { getSchedule, getBands } from "../../api";
import ScheduleBox from "./ScheduleBox";
import { IoMdArrowDropdown } from "react-icons/io";
import "../../globals.css";
import "./main.css";

async function Schedule() {
  const scheduleData = await getSchedule();
  const schedule = scheduleData.Midgard.mon;

  //   let listOfScenes = [];

  //   for (let scene in scheduleData) {
  //     listOfScenes.push(scene);
  //   }

  //   console.log(listOfScenes);
  //   console.log(bands);
  //   const bands = await getBands();
  //   console.log(bands);

  return (
    <article className=" -mx-mobile flex flex-col justify-center gap-4">
      {schedule.map((event) => {
        return (
          <ScheduleBox key={event.index} artist={event.act} time="start" />
        );
      })}
    </article>
  );
}

export default Schedule;
