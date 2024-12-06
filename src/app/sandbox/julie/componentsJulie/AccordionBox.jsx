"use client";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

useState;
function AccordionBox({ question, answer }) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  return (
    <section
      className="flex flex-col  p-1 justify-between cursor-pointer border-b border-accent-2 font-rethink"
      onClick={() => setIsAccordionOpen(!isAccordionOpen)}
    >
      <div className="flex justify-between">
        <span className="font-semibold text-md">{question}</span>
        {isAccordionOpen ? <FiMinus size="1.2rem" /> : <GoPlus size="1.2rem" />}
        {/* <GoPlus size="1.5rem" color="#A20F81" /> */}
      </div>
      <div
        className={`transition-all duration-200 ease-in-out ${
          isAccordionOpen ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
        }`}
      >
        <p className="text-sm">{answer}</p>
      </div>
    </section>
  );
}

export default AccordionBox;
