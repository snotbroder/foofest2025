import Link from "next/link";

function ClickableCard2({ headline, text, href }) {
  return (
    <Link href={href}>
      <div className="bg-tertiary w-64 pt-11 pb-20 px-6 flex flex-col gap-6 shadow-custom">
        <h2 className=" ">{headline}</h2>
        <p className="">{text}</p>
      </div>
    </Link>
  );
}

export default ClickableCard2;
