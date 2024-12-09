function ScheduleBox({ endTime, startTime, artist, logo }) {
  return (
    <div className="flex flex-col">
      <span className="bg-secondary px-2 ">{startTime}</span>
      <div className="flex py-3 list-none justify-between items-center">
        <li>
          {startTime} - {endTime}
        </li>
        <li>{artist} Helheim</li>
        <li>{logo}</li>
      </div>
    </div>
  );
}

export default ScheduleBox;
