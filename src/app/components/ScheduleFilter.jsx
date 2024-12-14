function ScheduleFilter({
  setPickedDay,
  setPickedStage,
  pickedDay,
  pickedStage,
}) {
  const stageArray = ["Midgard", "Jotunheim", "Vanaheim"];
  const daysArray = [
    {
      name: "monday",
      short: "mon",
    },
    {
      name: "tuesday",
      short: "tue",
    },
    {
      name: "wednesday",
      short: "wed",
    },
    {
      name: "thursday",
      short: "thu",
    },
    {
      name: "friday",
      short: "fri",
    },
    {
      name: "saturday",
      short: "sat",
    },
    {
      name: "sunday",
      short: "sun",
    },
  ];
  console.log(pickedDay);
  return (
    <article className="lg:px-32 lg:mt-28 flex flex-col gap-20">
      <h1 className="font-spicy ">Schedule</h1>

      <div className="flex flex-col gap-8 align-middle justify-center items-center">
        <div className="list-none text-main-1 flex gap-4">
          {stageArray.map((stage, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setPickedStage(stage);
                }}
                className={`cursor-pointer uppercase font-semibold  ${
                  pickedStage === stage ? "text-feedback-error" : " text-main-1"
                }`}
              >
                {stage}
              </li>
            );
          })}
        </div>
        <div className="list-none   text-main-1 flex gap-16">
          {daysArray.map((day) => {
            return (
              <li
                key={day.short}
                onClick={() => {
                  setPickedDay(day.short);
                }}
                className={`cursor-pointer uppercase text-main-1 ${
                  pickedDay === day.short ? "underline" : ""
                }`}
              >
                {day.short}
              </li>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default ScheduleFilter;
