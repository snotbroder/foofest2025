import {
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaRegCopyright,
} from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <footer className=" relative mt-60 flex flex-col  lg:flex-row overflow-hidden">
      <div className="flex flex-col gap-12 md:gap-10  mx-mobile md:mx-desktop relative before:absolute before:content-[''] before:w-screen before:-mx-mobile md:before:-mx-desktop before:h-[0.5px] before:bg-main-1 py-8 before:top-0">
        <div className="font-rethink flex gap-7  flex-col md:flex-row  md:gap-40 ">
          <ul>
            <li className="font-bold">About</li>
            <li>
              <a href="">About Foo Festival</a>
            </li>
            <li>
              <a href="">Job and Intership</a>
            </li>
            <li>
              <a href="">Press</a>
            </li>
          </ul>
          <ul>
            <li className="font-bold">Information</li>
            <li>FAQ</li>
            <li></li>
            <li></li>
          </ul>
          <ul>
            <li className="font-bold">Contact</li>
            <li>Info@foofestival.com</li>
            <li>+45 123 456 78</li>
            <li>Harmony Fields, Riverdale Valley</li>
          </ul>
        </div>
        <ul className="flex gap-8 text-4xl text-secondary">
          <li>
            <a href="">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="">
              <FaSpotify />
            </a>
          </li>
        </ul>
        <span className=" ml-2 mb-1 font-rethink flex items-center gap-1">
          <FaRegCopyright />
          2024, Foo Festival
        </span>
      </div>
      <div className="rotate-180  w-80 opacity-60">
        <Image
          src="illustrations/svg/flowerOrange.svg"
          width={140}
          height={140}
          objectFit="containr"
          alt="Orange Flower"
          className="w-auto h-auto -ml-20"
        ></Image>
      </div>
    </footer>
  );
}

export default Footer;
