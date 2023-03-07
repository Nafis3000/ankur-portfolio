import React from "react";
import { motion, spring, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Projects() {
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

  
  const newVariant = (x) => ({
    hidden: { opacity: 0, x: x },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  });
  

  return (
    <>
      <motion.div
        id="projects"
        className="w-full md:h-full p-2 flex items-center py-12 bg-gradient-to-b from-lime-300 to-cyan-300 py-20"
      >
        <motion.div
          className="w-full max-w-[1240px] m-auto flex flex-col gap-10 justify-evenly"
          variant={variant}
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="card p-6 bg-white border border-gray-200 rounded-lg hover:shadow cursor-pointer md:w-3/5 md:ml-10 h-96"
            variants={newVariant("-20rem")}
            initial={"hidden"}
            whileInView={"visible"}
          >
            <motion.div></motion.div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="card p-6 bg-white border border-gray-200 rounded-lg hover:shadow cursor-pointer md:w-3/5 md:mr-10 md:self-end h-96"
            variants={newVariant("20rem")}
            initial={"hidden"}
            whileInView={"visible"}
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="card p-6 bg-white border border-gray-200 rounded-lg hover:shadow cursor-pointer md:w-3/5 md:ml-10 h-96"
            variants={newVariant("-20rem")}
            initial={"hidden"}
            whileInView={"visible"}
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="card p-6 bg-white border border-gray-200 rounded-lg hover:shadow cursor-pointer md:w-3/5 md:mr-10 md:self-end h-96"
            variants={newVariant("20rem")}
            initial={"hidden"}
            whileInView={"visible"}
          ></motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
