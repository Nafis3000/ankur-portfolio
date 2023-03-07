import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Main = () => {
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
        className="w-full md:h-screen p-2 flex items-center py-8 bg-gradient-to-b from-violet-300 to-slate-50 "
      >
        <motion.div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <motion.div
            className="col-span-2 "
            variants={variant}
            initial={"hidden"}
            whileInView={"visible"}
          >
            <motion.h2 className="text-6xl tracking-widest pt-8 text-slate-900 text-center">
              <motion.span>Hello, my name is </motion.span>
              <motion.span className="bg-lime-400 text-black">
                Ankur
              </motion.span>
            </motion.h2>
            <motion.h2 className=" text-6xl tracking-widest pb-8 text-slate-900 text-center">
              I <motion.span className="text-red-400">design</motion.span> and{" "}
              <motion.span className="text-blue-400">develop</motion.span>.
            </motion.h2>
            <motion.p
              className="py-2 text-md text-slate-900"
              variants={pVariant}
            >
              I have always had a passion for technology and design, and I
              recently decided to turn that passion into a career.
            </motion.p>
            <motion.p
              className="py-2 text-md text-slate-900"
              variants={pVariant}
            >
              I have been learning and practicing web development skills through
              FreeCodeCamp, and I am excited to start building websites and
              applications for real clients. I am proficient in HTML, CSS, and
              JavaScript, as well as frameworks and libraries like React,
              Next.js and TailwindCSS and I am constantly learning and improving
              my skills.
            </motion.p>
            <motion.p
              className="py-2 text-md text-slate-900"
              variants={pVariant}
            >
              I am a strong believer in the power of collaboration and teamwork,
              and I am always eager to learn from others. I am excited to join a
              team of talented developers and contribute my skills and ideas to
              create beautiful and functional websites and applications.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "5rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-full h-auto m-auto  shadow-gray-400 rounded-xl flex items-center justify-center"
          >
            <img src="/ankurdixit.jpg" alt="about" />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Main;
