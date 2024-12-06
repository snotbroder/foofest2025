"use client";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

useState;
function AccordionBox() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <section
      onClick={() => setIsAccordionOpen(!isAccordionOpen)}
      className="flex flex-col gap-4 justify-between cursor-pointer border-b border-accent-2"
    >
      <div className="flex justify-between">
        <span>I was wondering about..</span>
        {isAccordionOpen ? <FiMinus /> : <GoPlus />}
        {/* <GoPlus size="1.5rem" color="#A20F81" /> */}
      </div>
      <div
        className={`transition-all duration-200 ease-in-out ${
          isAccordionOpen ? "opacity-100" : "opacity-0 h-0"
        }`}
      >
        <p>This is the anwser</p>
      </div>
    </section>
  );
}

export default AccordionBox;
