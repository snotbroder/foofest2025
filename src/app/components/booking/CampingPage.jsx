import CampingCards from "./CampingCards";
import { getSpots } from "../../api";
async function CampingPage() {
  const spots = await getSpots(); // Fetch data
  return (
    <div>
      <CampingCards spots={spots} />
    </div>
  );
}

export default CampingPage;
