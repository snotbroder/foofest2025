import { motion } from "motion/react";
import Benefits from "../components/Benefits";
import ClickableCard1 from "../components/ClickableCard1";
import VolunteerForm from "../components/VoluenteerForm";

function voluenteer() {
  return (
    <article className="flex flex-col gap-32 ">
      <section className="flex flex-col">
        <h1>BECOME A VOLUENTEER</h1>
        <h2>Do you want to become a part of foofest team 2025?</h2>
        <p>Join the Team Behind "CampEase" in Camping Area Helheim and Bring Comfort to the Festival life.</p>
        <button className="button grid place-self-start my-6">Apply now</button>
      </section>
      <section>
        <Benefits />
      </section>
      <div className="flex flex-col gap-6">
        <h2>Learn more about the jobs</h2>
        <div className="flex flex-wrap items-center justify-center md:justify-between xl:justify-between  gap-10 ">
          <ClickableCard1 src="/img/tshirt.webp" header="Safe space" alt="img" />
          <ClickableCard1 src="/img/tshirt.webp" header="Safe hhh" alt="img" />
          <ClickableCard1 src="/img/tshirt.webp" header="Safe space" alt="img" />
        </div>
      </div>
      <div className="flex flex-col gap-8 lg:items-center">
        <h2 className="text-center">Send application today!</h2>
        <VolunteerForm />
      </div>
    </article>
  );
}

export default voluenteer;
