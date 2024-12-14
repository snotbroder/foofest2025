import {
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaRegCopyright,
} from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <footer className="relative  mt-44 md:-mx-desktop -mx-mobile overflow-hidden before:absolute before:content-[''] before:w-full before:h-[0.5px] before:bg-main-1 ">
      <div className="absolute -right-28 opacity-60 w-96 top-6 rotate-180">
        <Image
          src="illustrations/svg/flowerOrange.svg"
          width={440}
          height={440}
          objectFit="cover"
          alt="Orange Flower"
        ></Image>
      </div>
      <div className="flex flex-col gap-12 md:gap-10 my-11 md:my-16 mx-mobile md:mx-desktop ">
        <div className="font-rethink flex gap-7 center flex-col md:flex-row md:gap-40 ">
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
      </div>
      <span className=" ml-2 mb-1 font-rethink flex items-center gap-1">
        <FaRegCopyright />
        2024, Foo Festival
      </span>
    </footer>
  );
}

export default Footer;
