function ScheduleBox({ time, stage, artist, logo }) {
  return (
    <div className="flex flex-col">
      <span className="bg-secondary px-2 ">00.00</span>
      <div className="flex py-3 list-none justify-between items-center">
        <li>
          {time} - {stage} Kl.14.00
        </li>
        <li>{artist} Helheim</li>
        <li>{logo}</li>
      </div>
    </div>
  );
}

export default ScheduleBox;
