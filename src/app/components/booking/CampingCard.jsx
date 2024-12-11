"use client";

function CampingCard({ area, space, info, setSelectedCamping, selectedCamping }) {
  return (
    <div
      onClick={() => {
        if (space !== 0) {
          setSelectedCamping(() => area);
        } else alert("There is no availability at desired camp");

        console.log("Theres no space at this camp");
      }} //space === 0 ? "bg-feedback-disabled-2 border-feedback-disabled-1" : "border-main-1"
      className={` ${selectedCamping === area ? "bg-main-2 border-solid border-main-1 border-2 after:bg-transparent" : "bg-primary"} flex flex-col gap-2 p-6 w-48 cursor-pointer  after:bg-main-1 relative after:absolute after:top-0 after:left-0 after:-z-10 after:content-[''] after:w-full after:h-full after:ml-1 after:mt-1 hover:after:mt-0 hover:after:ml-0 after:transition-all after:duration-75 hover:outline-1 hover:outline-main-1 hover:text-main-1 hover:transition-all `}
    >
      <h2 className="font-rethink font-semibold text-main-1 text-xl">{area}</h2>
      <p>{info}</p>
      <h3 className={`font-rethink  text-xl ${space === 0 ? "text-feedback-error" : "text-main-1"}`}>{space} spaces available</h3>
    </div>
  );
}

export default CampingCard;