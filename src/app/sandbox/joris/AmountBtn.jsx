function AmountBtn() {
  return (
    <div className="flex justify-between w-32 place-items-center">
      <button className="font-rethink z-10 text-main-1 text-2xl px-3 py-1 border-solid border-main-1 border-2 after:bg-main-1 relative after:absolute after:top-0 after:left-0 after:-z-10 after:content-[''] after:w-full after:h-full after:ml-1 after:mt-1 hover:after:mt-0 hover:after:ml-0 after:transition-all after:duration-75 hover:outline-1 hover:outline-main-1 hover:text-main-1 hover:transition-all">-</button>
      <span>AMOUNT</span>
      <button>+</button>
    </div>
  );
}

export default AmountBtn;
