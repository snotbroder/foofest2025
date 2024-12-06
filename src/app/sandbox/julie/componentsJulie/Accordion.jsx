import AccordionBox from "./AccordionBox";

function Accordion() {
  return (
    <article className="w-full m--24 bg-primary w-max-24 p-4 flex flex-col gap-4 text-main-1  rounded-rounded-reg -mb-10">
      <h4 className="text-lg font-semibold border-b border-feedback-error">
        FAQ
      </h4>
      <AccordionBox />
      <AccordionBox />
      <AccordionBox />
    </article>
  );
}

export default Accordion;
