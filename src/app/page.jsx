"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/profilepicnobg.png" alt="Jagadeesh Portfolio" fill className="object-contain" priority
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Turning Vision Into Reality With Code And Design.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            As a skilled full-stack developer, I’m dedicated to transforming complex challenges into
            efficient, high-performing applications. Explore my latest projects showcasing expertise in Java,
            React.js, AWS.
          </p>
          {/*BUTTONS*/}
          <div className="w-full flex gap-4">
            <Link href="/JagadeeshResume.pdf" target="_blank">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white font-semibold hover:bg-pink-100 hover:text-black">
                Resume
              </button>
            </Link>
            <Link href="/portfolio">
              <button
                  className="p-4 rounded-lg ring-1 ring-black bg-black text-white font-semibold hover:bg-pink-100 hover:text-black">
                Work
              </button>
            </Link>
            <Link href="/contact">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white font-semibold hover:bg-pink-100 hover:text-black">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
