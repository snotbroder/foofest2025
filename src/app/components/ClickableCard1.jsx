import Image from "next/image";

function ClickableCard1({ header, text, src, alt }) {
  return (
    <div className="w-64 shadow-custom lg:w-80 bg-tertiary p-4 text-main-1  font-rethink flex flex-col gap-1">
      <Image
        src={src}
        width={400}
        height={400}
        alt={alt}
        className="object-cover "
      ></Image>
      <div>
        <h3 className="font-bold">{header}</h3>
        <p className="">{text}</p>
      </div>
    </div>
  );
}

export default ClickableCard1;
