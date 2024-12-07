import "./main.css";
import BandCard from "./components/BandCard";
import Footer from "./Footer";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Link href="/" className="text-blue-700 hover:text-red-600 text-xl">
        Home
      </Link>
      <div className="hello">Sofies sandbox</div>
      <div className="flex-wrap flex justify-center gap-12">
        <BandCard imgSrc="/img/led-zeppelin.jpg" name="Led Zeppelin"></BandCard>
        <BandCard imgSrc="/img/led-zeppelin.jpg" name="Led Zeppelin"></BandCard>
        <BandCard imgSrc="/img/led-zeppelin.jpg" name="Led Zeppelin"></BandCard>
        <BandCard imgSrc="/img/led-zeppelin.jpg" name="Led Zeppelin"></BandCard>
      </div>
      <Footer></Footer>
    </>
  );
}
