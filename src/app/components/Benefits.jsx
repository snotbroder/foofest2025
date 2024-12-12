import { IoTicketOutline } from "react-icons/io5";
import { MdOutlineFastfood } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaShower } from "react-icons/fa6";

function Benefits() {
  return (
    <section className="bg-secondary -mx-mobile px-4 py-20 text-main-2 flex   flex-col lg:-mx-desktop text-lg gap-20  font-rethink text-center justify-center ">
      <h1 className="text-3xl md:text-4xl font-semibold">BENEFITS</h1>
      <div className=" flex-col flex lg:flex-row gap-20 text-center justify-center items-center ">
        <div className="flex flex-col gap-2 items-center max-w-36">
          <IoTicketOutline className="lg:size-11 size-9" />
          <p>One free meal pr day</p>
        </div>
        <div className="flex flex-col gap-2 items-center  max-w-36">
          <MdOutlineFastfood className="lg:size-11 size-9" />
          <p>One free ticket for the festival</p>
        </div>
        <div className="flex flex-col gap-2 items-center max-w-36">
          <RiDiscountPercentLine className="lg:size-11 size-9" />
          <p>10% discount on your next ticket</p>
        </div>
        <div className="flex flex-col gap-2 items-center max-w-36">
          <FaShower className="lg:size-11 size-9" />
          <p>Free access to the hot showers</p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
