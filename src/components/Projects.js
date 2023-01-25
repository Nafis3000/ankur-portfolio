import React from "react";
import { motion, spring, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Projects() {


  return (
    <>
      <motion.div
        id="projects"
        className="w-full md:h-screen p-2 flex items-center py-12 bg-zinc-800"
      >
        <motion.div className="w-full max-w-[1240px] m-auto flex flex-col gap-10 justify-evenly">
          <motion.div className="card p-6 bg-white border border-gray-200 rounded-lg shadow cursor-pointer w-3/5">
            <motion.div></motion.div>
          </motion.div>
          <motion.div className="card p-6 bg-white border border-gray-200 rounded-lg shadow cursor-pointer w-3/5 self-end"></motion.div>
          <motion.div className="card p-6 bg-white border border-gray-200 rounded-lg shadow cursor-pointer w-3/5"></motion.div>
          <motion.div className="card p-6 bg-white border border-gray-200 rounded-lg shadow cursor-pointer w-3/5 self-end"></motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
