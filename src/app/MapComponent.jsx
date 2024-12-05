import { getBands } from "../app/api";
export async function MapComponent() {
  return (
    <div>
      (
      {bands.map((band, index) => {
        return <h1 key={index}>{band.name}</h1>;
      })}
      );
    </div>
  );
}
