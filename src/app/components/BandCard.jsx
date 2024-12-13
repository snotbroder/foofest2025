import Image from "next/image";
import Link from "next/link";
// import "../globals.css";

export default function BandCard({ genre, imgSrc, alt, name, slug }) {
  return (
    <div className=" w-52 xl:w-64 flex flex-col shadow-custom ">
      <Link href={`/bands/${slug}`}>
        <div className="relative h-[130px] xl:h-[200px]   ">
          <div className="absolute font-rethink  font-bold right-0 top-5 text-main-2 bg-tertiary uppercase py-0.5 px-5 z-10  ">
            <p className="p.small">{genre}</p>
          </div>
          <Image
            className="fill"
            src={imgSrc}
            alt={alt}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="bg-primary h-16 flex justify-center items-center w-full   ">
          <h3 className="font-rethink font-extrabold uppercase  text-center  py-5">{name}</h3>
        </div>
      </Link>
    </div>
  );
}
