import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Work = () => {
  const variant = {
    hidden: { opacity: 0, x: "-20rem" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const pVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "linear" } },
  };
  
  return (
    <>
      <motion.div
        id="work"
        className="w-full md:h-screen p-2 flex flex-col items-center justify-between py-8 bg-gradient-to-b from-violet-300 to-slate-50 "
      >
        <div className="w-full flex flex-col sm:flex-row items-center justify-between px-10">
          <div class="flex flex-col w-full justify-between pt-10">
            <h1 className="text-bol text-6xl py-4">Hello!</h1>
            <p className="py-2 text-4xl tracking-widest">
              I am <b>Ankur Dixit</b> and I am a UX Designer and a Junior
              Developer based in Vancouver, BC.
            </p>
            <p className="py-2 text-4xl tracking-widest">
              I create incredible digital experiences for people.
            </p>
          </div>
          <Image
            src="face.svg"
            width={340}
            height={340}
            className="sm:pb-10"
          ></Image>
        </div>
        <div className="w-full flex flex-col justify-around items-center">
          <div>case study 1</div>
          <div>case study 2</div>
          <div>case study 3</div>
        </div>
      </motion.div>
    </>
  );
};

export default Work;
