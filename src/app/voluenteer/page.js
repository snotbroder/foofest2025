import Benefits from "../components/Benefits";
import ClickableCard1 from "../components/ClickableCard1";
import VolunteerForm from "../components/VoluenteerForm";

function voluenteer() {
  return (
    <article className="flex flex-col gap-24 mt-20 ">
      <section className="flex flex-col gap-4  text-main-1 ">
        <h1 className=" text-4xl md:text-6xl font-semibold font-spicy">
          BECOME A VOLUENTEER
        </h1>
        <h2 className=" md:text-2xl text-lg font-rethink">
          Do you want to become a part of foofest team 2025?
        </h2>
        <p className="font-rethink md:text-lg">
          Join the Team Behind "CampEase" in Camping Area Helheim and Bring
          Comfort to the Festival life.
        </p>
        <button className="bg-accent-1 md:text-base text-sm shadow-lg shadow-black flex self-start px-4 py-0.5">
          Apply now!
        </button>
      </section>
      <section>
        <Benefits />
      </section>
      <div className="flex flex-col gap-8">
        <h3 className="text-3xl md:text-4xl font-semibold text-center text-main-1">
          LEARN MORE ABOUT THE JOBS
        </h3>
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
        <h4 className="text-3xl md:text-4xl font-semibold text-center text-main-1">
          SEND A APPLICATION TODAY
        </h4>
        <VolunteerForm />
      </div>
    </article>
  );
}

export default voluenteer;
