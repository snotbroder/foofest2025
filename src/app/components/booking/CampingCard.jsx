"use client";

function CampingCard({
  area,
  space,
  info,
  selectedCamping,
  setSelectedCamping,
}) {
  return (
    <div
      onClick={() => {
        setSelectedCamping(() => area);
      }}
      className={`${
        selectedCamping === area ? "bg-white" : "bg-primary"
      } flex flex-col gap-4 pt-6 px-4 w-60 h-56 cursor-pointer border-2 border-black shadow-[10px_10px_0px_black]`}
    >
      <h2 className=" font-rethink font-semibold text-main-1 text-3xl">
        {area}
      </h2>
      <p>{info}</p>
      <h3 className=" font-rethink text-main-1 text-xl">
        {space} spaces available
      </h3>
    </div>
  );
}

export default CampingCard;
