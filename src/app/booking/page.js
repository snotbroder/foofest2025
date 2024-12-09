"use client";
import CampingCards from "../components/booking/CampingCards";
import { getSpots } from "../api";
import BookingSteps from "../components/booking/BookingSteps";

async function BookingPage() {
  const spots = await getSpots(); // Fetch data
  //BookingStep state
  const [step, setState] = useState(0);
  return (
    <>
      <p>
        state is <span className="font-bold text-red-600">{step}</span>
      </p>
      <BookingSteps step={step}></BookingSteps>
      <CampingCards spots={spots} />
    </>
  );
}

export default BookingPage;
