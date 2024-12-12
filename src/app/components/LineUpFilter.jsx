function LineUpFilter() {
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
  return (
    <article>
      <h1 className="font-spicy text-4xl text-main-1 mb-6">Schedule</h1>

      <div className="flex flex-col gap-8 align-middle justify-center items-center">
        <div className="list-none text-main-1 flex gap-4">
          {genreArray.map((genre, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setPickedGenre(genre);
                }}
                className={`cursor-pointer uppercase font-semibold  ${
                  pickedGenre === genre ? "text-feedback-error" : " text-main-1"
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

export default LineUpFilter;
