import Link from "next/link";
import { getBands } from "../app/api";
import "./globals.css";
export default async function Home() {
  const bands = await getBands();
  console.log(bands);

  return (
    <div className="">
      <div className="flex gap-5 ">
        <Link className="text-blue-700 hover:text-red-600 text-xl" href="/sandbox/sofie">
          Sofies sandbox
        </Link>
        <Link className="text-blue-700 hover:text-red-600 text-xl" href="/sandbox/julie">
          Julies sandbox
        </Link>
        <Link className="text-blue-700 hover:text-red-600 text-xl" href="/sandbox/joris">
          Joris' sandbox
        </Link>
      </div>
      <h1 className="font-spicy text-main-1">TEXT HERE</h1>
      <p className="text-main-1 font-rethink font-bold">This is a paragraph</p>
      <p className="text-accent-1 font-rethink font-semibold">This is a paragraph semibold</p>
      <div className="grid grid-cols-6 text-gray-300">
        {bands.map((band, index) => {
          return (
            <p key={band.slug}>
              {band.name}
              <span>{index}</span>
            </p>
          );
        })}
      </div>
      <footer>Footer</footer>
    </div>
  );
}
