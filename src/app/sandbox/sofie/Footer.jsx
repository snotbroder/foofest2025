import {
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaRegCopyright,
} from "react-icons/fa";
import Image from "next/image";
function Footer() {
  return (
    <footer className="mt-20 md:-mx-desktop -mx-mobile overflow-hidden">
      <span className="before:block before:h-px  before:bg-main-1  "></span>
      <div className="flex flex-col gap-8 md:gap-11 my-11 md:my-16 mx-mobile md:mx-desktop">
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
      <span className="block relative after:content-[''] after:bg-[url('/img/flower1.svg')] after:bg-cover after:w-80 after:h-80 lg:after:w-96 lg:after:h-96 after:opacity-60 after:absolute after:-bottom-10 after:-right-20 md:after:-right-0 md:after:-bottom-10 lg:after:-right-20 lg:after:-bottom-16 after:z-[-1] "></span>
    </footer>
  );
}

export default Footer;
