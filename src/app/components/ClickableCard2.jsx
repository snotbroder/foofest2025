import Link from "next/link";

function ClickableCard2({ headline, text, href }) {
  return (
    <Link href={href}>
      <div className="bg-tertiary w-64 pt-11 pb-20 px-6 flex flex-col gap-6 shadow-custom">
        <h2 className="font-spicy text-2xl md:text-3xl">{headline}</h2>
        <p className="text-sm md:text-base">{text}</p>
      </div>
    </Link>
  );
}

export default ClickableCard2;
