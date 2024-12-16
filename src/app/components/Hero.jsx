"use client";
import Image from "next/image";
import { motion } from "motion/react";
function Hero() {
  return (
    <article className="bg-[url('/img/filterbg.webp')] bg-cover ">
      <section className="bg-[url('/illustrations/patternHero.svg')] bg-cover -mx-mobile lg:-mx-desktop after:content-[''] after:h-1 after:bg-secondary after:w-full after:absolute after:opacity-60 ">
        <div className="pt-32 pb-32 md:pb-2 mx-mobile lg:mx-desktop relative grid grid-cols-[2fr_1fr] ">
          {/* <motion.div className=" logo bg-[url('/illustrations/logo2.svg')] bg-cover mb-14"></motion.div> */}
          <div className="row-[2/4]">
            <h1 className="  font-spicy">Foo Festival 2025</h1>
            <p className="font-rethink">
              Where Music Meets Peace, Love, and Groovy Vibes&nbsp;
              <time className="font-bold">July 7th - 13th</time>
            </p>
          </div>
          <div className=" row-[1/5]">
            <motion.div
              whileInView={{ scale: 1, rotate: 180 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              initial={{ scale: 0 }}
              className="hidden sm:block w-fit"
            >
              <Image
                className="justify-self-end"
                src="/illustrations/flower2Green.svg"
                width={300}
                height={300}
                alt="green flower"
              />
            </motion.div>
            <motion.div
              className="hidden sm:block w-fit"
              whileInView={{ scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              initial={{ scale: 0 }}
            >
              <Image
                className="justify-self-end"
                src="/illustrations/pink-flower.svg"
                width={200}
                height={200}
                alt="green flower"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Hero;
