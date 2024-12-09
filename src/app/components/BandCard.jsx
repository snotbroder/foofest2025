import Image from "next/image";
import Link from "next/link";

export default function BandCard({ genre, imgSrc, alt, name, slug }) {
  return (
    <div className=" w-80  flex flex-col shadow-custom ">
      <Link href={`/bands${slug}`}>
        <div className=" relative w-full h-72 ">
          <div className="absolute font-rethink text-sm font-bold right-0 top-5 text-main-1 bg-main-2  uppercase py-1 px-5 z-10  ">
            <p>{genre}</p>
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
        <div className="bg-primary h-14 flex justify-center items-center w-full  ">
          <h3 className="font-rethink font-extrabold uppercase text-main-1 text-center text-2xl md:text-3xl py-3">
            {name}
          </h3>
        </div>
      </Link>
    </div>
  );
}
