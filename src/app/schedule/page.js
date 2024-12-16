"use client";

import { useState } from "react";
import Schedule from "../components/Schedule";

function page() {
  // const [pickedDay, setPickedDay] = useState("");
  // const [pickedStage, setPickedStage] = useState("");

  return (
    // <div>
    //   <h1 className="font-spicy text-4xl text-main-1">Schedule</h1>

    //   <select
    //     className="custom-selector inline-block justify-self-center"
    //     name="stages"
    //     id="stages"
    //   >
    //     <option value="MidGard">MidGard</option>
    //     <option value="Jotunheim">Jotunheim</option>
    //     <option value="Vanaheim">Vanaheim</option>
    //   </select>

    //   <div className="list-none flex gap-4">
    //     <li className="text-main-1 font-semibold">MAN</li>
    //     <li
    //       onClick={() => {
    //         setPickedDay("");
    //         setPickedStage("");
    //       }}
    //     >
    //       THU
    //     </li>
    //     <li>WEN</li>
    //     <li>THR</li>
    //     <li>FRI</li>
    //     <li>SAT</li>
    //     <li>SUN</li>
    //   </div>
    //   <Schedule />
    // </div>
    <Schedule />
  );
}

export default page;

// "use client";

// import { useState } from "react";
// import useSWR from "swr";
// import Schedule from "../components/Schedule";

// const fetcher = (url) => fetch(url).then((res) => res.json());

// function Page() {
//   const [pickedDay, setPickedDay] = useState("mon");
//   const [pickedStage, setPickedStage] = useState("Midgard");

//   const {
//     data: scheduleData,
//     error,
//     isLoading,
//   } = useSWR("https://sudsy-jet-grill.glitch.me/schedule", fetcher);

//   if (error) return <div>Error loading schedule: {error.message}</div>;
//   if (isLoading) return <div>Loading schedule...</div>;

//   const schedule = scheduleData?.[pickedStage]?.[pickedDay] || [];

//   return (
//     <div>
//       <h1 className="font-spicy text-4xl text-main-1">Schedule</h1>

//       {/* Dropdown to select stage */}
//       <select
//         className="custom-selector inline-block justify-self-center"
//         name="stages"
//         id="stages"
//         value={pickedStage}
//         onChange={(e) => setPickedStage(e.target.value)} // Update stage
//       >
//         <option value="Midgard">Midgard</option>
//         <option value="Jotunheim">Jotunheim</option>
//         <option value="Vanaheim">Vanaheim</option>
//       </select>

//       {/* Dropdown to select day */}
//       <div className="list-none flex gap-4">
//         {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((day) => (
//           <li
//             key={day}
//             className={`text-main-1 font-semibold ${
//               pickedDay === day ? "text-blue-500" : ""
//             }`}
//             onClick={() => setPickedDay(day)} // Update day
//           >
//             {day.toUpperCase()}
//           </li>
//         ))}
//       </div>

//       {/* Render filtered schedule */}
//       <Schedule scheduleData={schedule} />
//     </div>
//   );
// }

// export default Page;
