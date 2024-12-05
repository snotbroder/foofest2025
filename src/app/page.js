import { getBands } from "../app/api";

export default async function Home() {
  const bands = await getBands();
  console.log(bands);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {bands.map((band) => {
        return <h1 key={band.slug}>{band.name}</h1>;
      })}
      <h1>Hej</h1>
    </div>
  );
}
