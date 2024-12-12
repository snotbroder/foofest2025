import { getBands } from "../api";

async function LineUpFilter() {
  const bands = await getBands();
  let genres = [...new Set(bands.map((band) => band.genre))];

  return (
    <div>
      <label>Choose a genre:</label>

      <select name="genres" id="select-genre">
        {genres.map((genre, index) => {
          return (
            <option value={genre} key={index}>
              {genre}
            </option>
          );
        })}
      </select>
      {/* 
      <div>
        {bands.map((band) => {
          return (
            <div key={band.id}>
              <h1>{band.name}</h1>
              <h2>{band.genre}</h2>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default LineUpFilter;
