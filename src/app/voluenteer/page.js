import Benefits from "../components/Benefits";
import ClickableCard1 from "../components/ClickableCard1";
import VolunteerForm from "../components/VoluenteerForm";
import Image from "next/image";

function voluenteer() {
  return (
    <article className="flex relative flex-col -mx-desktop  overflow-hidden  gap-24 mt-20 ">
      <div className=" absolute   -right-52 ">
        <Image
          src="/illustrations/star.svg"
          width={600}
          height={600}
          alt="pink flower/star illustration"
        />
      </div>
      <section className="flex flex-col gap-4  text-main-1">
        <h1 className="font-semibold font-spicy">BECOME A VOLUENTEER</h1>
        <h2 className=" font-rethink">
          Do you want to become a part of foofest team 2025?
        </h2>
        <p className="font-rethink ">
          Join the Team Behind "CampEase" in Camping Area Helheim and Bring
          Comfort to the Festival life.
        </p>
        <button className="bg-accent-1  shadow-lg shadow-black flex self-start px-4 py-0.5">
          Apply now!
        </button>
      </section>

      <Benefits />
      <div className="flex flex-col gap-8">
        <h2 className="font-semibold text-center text-main-1">
          LEARN MORE ABOUT THE JOBS
        </h2>
        <div className="flex flex-wrap items-center justify-center xl:justify-between  gap-10 ">
          <ClickableCard1
            src="/img/tshirt.webp"
            header="Safe space"
            alt="img"
          />
          <ClickableCard1 src="/img/tshirt.webp" header="Safe hhh" alt="img" />
          <ClickableCard1
            src="/img/tshirt.webp"
            header="Safe space"
            alt="img"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:items-center">
        <h2 className="font-semibold text-center text-main-1">
          SEND A APPLICATION TODAY
        </h2>
        <VolunteerForm />
      </div>
    </article>
  );
}

export default voluenteer;
