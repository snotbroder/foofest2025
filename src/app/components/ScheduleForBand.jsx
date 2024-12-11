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
    <div className="font-rethink flex flex-col gap-4 ">
      <div>
        <h3 className="font-bold text-2xl">Schedule</h3>
        {scheduleItems.length > 0 ? (
          scheduleItems.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 ">
              <div className="flex gap-2 ">
                <p className="font-bold">Day:</p>
                <span>{item.day}</span>
              </div>
              <div className="flex  gap-2">
                <p className="font-bold">Where:</p>
                <span>{item.stage}</span>
              </div>
              <div className="flex  gap-2">
                <p className="font-bold">When:</p>
                <span>
                  {item.end} - {item.start}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p>No schedule available for this band</p>
        )}
      </div>
      <div className="w-full h-[1.5px] bg-primary"></div>
      <div>
        <h3 className="text-1xl font-bold">Band members</h3>
        <ul>{band.members.join(", ")}</ul>
      </div>
    </div>
  );
}

export default ScheduleForBand;
