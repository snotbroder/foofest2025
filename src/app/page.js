import Link from "next/link";
import { getBands } from "../app/api";

export default async function Home() {
  const bands = await getBands();
  console.log(bands);

  return (
    <div className="">
      <div className="flex gap-5 ">
        <Link className="text-blue-700 hover:text-red-600 text-xl" href="/app/sandbox/sofie">
          Sofies sandbox
        </Link>
        <Link className="text-blue-700 hover:text-red-600 text-xl" href="/app/sandbox/julie">
          Julies sandbox
        </Link>
        <Link className="text-blue-700 hover:text-red-600 text-xl" href="/app/sandbox/joris">
          Joris' sandbox
        </Link>
      </div>
      <div className="grid grid-cols-6 text-gray-300">
        {bands.map((band, index) => {
          return (
            <h1 key={band.slug}>
              {band.name}
              <span>{index}</span>
            </h1>
          );
        })}
      </div>
      <footer>Footer</footer>
    </div>
  );
}
