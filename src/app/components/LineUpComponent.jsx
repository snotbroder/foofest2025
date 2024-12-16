"use client";

import { useState } from "react";
import useSWR from "swr";
import BandCard from "./BandCard";
import { IoMdArrowDropdown } from "react-icons/io";

const fetcher = (url) => fetch(url).then((res) => res.json());

function LineUpComponent() {
  const BASE_URL = "https://sudsy-jet-grill.glitch.me/logos/";

  let { data, error, isLoading } = useSWR(
    "https://sudsy-jet-grill.glitch.me/bands",
    fetcher
  );

  let [isListAscending, setIsListAscending] = useState(false);
  let [dataThatIsMapping, setDataThatIsMapping] = useState(data || []);
  let [pickedGenre, setPickedGenre] = useState("");

  function handleAscending() {
    if (isListAscending === true) {
      let sortedBands = [...data].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setDataThatIsMapping(sortedBands);
    } else {
      let sortedBands = data.sort((b, a) => {
        return a.name.localeCompare(a.name);
      });
      setDataThatIsMapping(sortedBands);
    }
    setIsListAscending(!isListAscending);
  }

  const currentData = dataThatIsMapping.length > 0 ? dataThatIsMapping : data;

  if (error) return <div>Error loading schedule: {error.message}</div>;
  if (isLoading) return <div>Loading schedule...</div>;

  let genres = [...new Set(data.map((band) => band.genre))];

  return (
    <article>
      <div className=" text-lg font-bold justify-center  items-center sm:flex-row sm:text-2xl  sm:justify-center lg:text-3xl  flex-col inline-flex gap-8 font-rethink text-main-1">
        <div className="select-container ">
          <select
            className="select-box"
            name="genres"
            id="select-genre"
            onChange={(e) => setPickedGenre(e.target.value)}
          >
            <option>FILTER BY GENRE</option>
            {genres.map((genre, index) => {
              return (
                <option value={genre} key={index}>
                  {genre}
                </option>
              );
            })}
          </select>
          <div className="select-icon cursor-pointer">
            <IoMdArrowDropdown size={35} />
          </div>
        </div>
        <div>
          <button
            className="text-main-1 uppercase font-rethink "
            onClick={handleAscending}
          >
            {isListAscending ? "Z-A" : "A-Z"}
          </button>
        </div>
      </div>
      <div className="bg-secondary -mx-mobile lg:-mx-desktop pt-16 mt-10 md:mt-20">
        <div className="flex flex-wrap justify-center md:justify-between gap-10 mx-mobile pb-16 lg:mx-desktop">
          {currentData.map((band) => {
            const logo = band.logo.startsWith("http")
              ? band.logo
              : `${BASE_URL}${band.logo}`;
            return (
              (!pickedGenre || band.genre === pickedGenre) && (
                <BandCard
                  alt={`Logo of ${band.name}`}
                  key={band.name}
                  imgSrc={logo}
                  name={band.name}
                  genre={band.genre}
                  slug={band.slug}
                />
              )
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default LineUpComponent;
