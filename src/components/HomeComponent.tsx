"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const HomeComponent = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex h-full flex-col px-4 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/2 lg:h-full lg:w-1/2">
          <img src="/hero.png" alt="hero" className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="flex h-1/2 flex-col items-center justify-center gap-8 lg:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="text-4xl font-bold md:text-6xl">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="flex w-full gap-4">
            <button className="rounded-lg bg-black p-4 text-white ring-1 ring-black">
              View My Work
            </button>
            <button className="rounded-lg p-4 ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeComponent;
