"use client";

import { useState } from "react";
import useSWR from "swr";
import BandCard from "./BandCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

function LineUpComponent() {
  const BASE_URL = "http://localhost:8080/logos/";

  let { data, error, isLoading } = useSWR(
    "http://localhost:8080/bands",
    fetcher
  );

  let [isListAscending, setIsListAscending] = useState(false);
  let [dataThatIsMapping, setDataThatIsMapping] = useState(data || []);
  let [pickedGenre, setPickedGenre] = useState("Jazz");

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
      <div>
        <label>Choose a genre:</label>
        <select
          name="genres"
          id="select-genre"
          onChange={(e) => setPickedGenre(e.target.value)}
        >
          {genres.map((genre, index) => {
            return (
              <option value={genre} key={index}>
                {genre}
              </option>
            );
          })}
        </select>
        <div>
          <button onClick={handleAscending}>
            {isListAscending ? "Z-A" : "A-Z"}
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-between gap-10 mx-mobile lg:mx-desktop">
        {currentData.map((band) => {
          const logo = band.logo.startsWith("http")
            ? band.logo
            : `${BASE_URL}${band.logo}`;
          return (
            band.genre === pickedGenre && (
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
    </article>
  );
}

export default LineUpComponent;
