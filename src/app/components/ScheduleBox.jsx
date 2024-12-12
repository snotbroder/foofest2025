function ScheduleBox({ endTime, startTime, artist, logo, stage }) {
  return (
    <div className="flex flex-col">
      <span className="bg-secondary px-2  flex justify-between ">
        <div>Time</div>
        <div>Band</div>
        <div>Stage</div>
      </span>
      <div className="flex text-center py-3 uppercase list-none justify-between items-center">
        <li>
          {startTime} - {endTime}
        </li>
        <li>{artist}</li>
        <li>{stage}</li>
      </div>
    </div>
  );
}

export default ScheduleBox;
