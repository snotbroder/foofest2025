import Image from "next/image";

function ClickableCard1({ header, text, src, alt }) {
  return (
    <div className="w-96  bg-tertiary p-4 text-main-1 font-rethink flex flex-col gap-4 shadow-custom">
      <Image
        src={src}
        width={500}
        height={500}
        alt={alt}
        className="object-cover "
      ></Image>
      <div>
        <h4 className="text-xl font-bold">{header}</h4>
        <p className="text-sm md:text-base">{text}</p>
      </div>
    </div>
  );
}

export default ClickableCard1;
