function AmountBtn() {
  return (
    <div className="flex justify-between w-32 place-items-center">
      <button className="font-rethink text-main-1 text-2xl px-3 py-1 border-solid border-main-1 border-2">-</button>
      <span>AMOUNT</span>
      <button>+</button>
    </div>
  );
}

export default AmountBtn;
