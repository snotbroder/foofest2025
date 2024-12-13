"use client";
function CtaButton({ text, action }) {
  return (
    <button
      className=" font-rethink text-main-2 font-sm bg-accent-1 px-4 py-1 uppercase font-bold  after:bg-main-1 relative after:absolute after:top-0 after:left-0 after:-z-10 after:content-[''] after:w-full after:h-full after:ml-1 after:mt-1 hover:after:mt-0 hover:after:ml-0 after:transition-all after:duration-75 hover:outline-1 hover:outline-main-1 hover:text-main-1 hover:transition-all active:bg-main-1 active:text-main-2"
      onClick={action}
    >
      {text}
    </button>
  );
}

export default CtaButton;

function sayHi() {
  console.log("Hi");
}
