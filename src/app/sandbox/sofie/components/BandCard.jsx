import Image from "next/image";

export default function BandCard({ imgSrc, altText, name }) {
  return (
    <div className=" flex w-96 flex-col shadow-custom">
      <img className=" h-80 object-cover " src={imgSrc} alt={altText} />
      <div className="bg-primary ">
        <h3 className="font-spicy uppercase text-main-1 text-center text-2xl md:text-3xl py-3">
          {name}
        </h3>
      </div>
    </div>
  );
}
