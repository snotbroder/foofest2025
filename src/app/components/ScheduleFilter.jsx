import Image from "next/image";

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
    <article className="lg:px-32 lg:mt-48 flex flex-col gap-10">
      <h1 className="font-spicy ">Schedule</h1>

      <div className="flex flex-col gap-5 align-middle justify-center items-center relative">
        <div className="absolute mx-auto -right-52 hidden -top-24 lg:block opacity-60 ">
          <Image
            alt="Orange Flower"
            src="illustrations/svg/flower2Orange.svg"
            width={180}
            height={180}
          ></Image>
        </div>
        <div className="absolute mx-auto -right-40 hidden top-20 opacity-60 lg:block">
          <Image
            alt="Orange Flower"
            src="illustrations/svg/flower2Orange.svg"
            width={140}
            height={140}
          ></Image>
        </div>
        <div className="absolute mx-auto right-0 hidden opacity-60 -top-6 lg:block">
          <Image
            alt="Orange Flower"
            src="illustrations/svg/flower2Orange.svg"
            width={100}
            height={100}
          ></Image>
        </div>
        <div className="absolute mx-auto -left-60 hidden top-96 opacity-60 lg:block">
          <Image
            alt="Pink Spiral"
            src="illustrations/svg/spiralPink.svg"
            width={210}
            height={210}
          ></Image>
        </div>
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
