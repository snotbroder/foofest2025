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

function Schedule({ scheduleData }) {
  if (!scheduleData || scheduleData.length === 0) {
    return <div>No events found for this day and stage.</div>;
  }

  return (
    <article className=" -mx-mobile flex flex-col justify-center gap-4">
      {scheduleData.map((event, index) => (
        <div key={index} className="schedule-box">
          <h2>{event.act}</h2>
          <p>
            {event.start} - {event.end}
          </p>
        </div>
      ))}
    </article>
  );
}

export default Schedule;
