function ScheduleForBand({ schedule, bandName, band }) {
  console.log(schedule);
  const scheduleItems = [];

  //gr gennem hver scene og dag i schedule objektet
  Object.entries(schedule).forEach(([stage, days]) => {
    Object.entries(days).forEach(([day, events]) => {
      events
        //filtrering af events så act og bandname stemmer overens
        .filter((event) => event.act === bandName)
        .forEach((event) => {
          //tilføjer et nyt objekt til det eksisterende array
          scheduleItems.push({
            stage,
            day,
            start: event.start,
            end: event.end,
          });
        });
    });
  });
  return (
    <div className=" flex flex-col gap-8 ">
      <div className="flex flex-col gap-2">
        <h3>Schedule</h3>
        {scheduleItems.length > 0 ? (
          scheduleItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 ">
              <p>
                <span className="font-bold">Day: </span>
                {item.day}
              </p>
              <p>
                <span className="font-bold">Where: </span>
                {item.stage}
              </p>
              <p>
                <span className="font-bold">When: </span>
                {item.end} - {item.start}
              </p>
            </div>
          ))
        ) : (
          <p>No schedule available for this band</p>
        )}
      </div>
      <div className=" relative before:absolute before:content-[''] before:h-[1px] before:bg-primary before:w-full before:-top-4">
        <h3 className=" font-bold">Band members</h3>
        <ul>{band.members.join(", ")}</ul>
      </div>
    </div>
  );
}

export default ScheduleForBand;
