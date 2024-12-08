import "./main.css";
import Link from "next/link";
import Schedule from "./Schedule";
import ScheduleBox from "./ScheduleBox";
import "./main.css";
import SchedulePage from "./SchedulePage";

export default function Home() {
  return (
    <>
      <Link href="/" className="text-blue-700 hover:text-red-600 text-xl">
        Home
      </Link>
      {/* <div className="hello">Julies sandbox</div> */}
      <SchedulePage />
      <Schedule />
    </>
  );
}
