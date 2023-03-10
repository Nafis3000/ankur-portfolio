import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaInstagram, FaFreeCodeCamp } from "react-icons/fa";
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleNav = () => {
    setShow(!show);
  };

  return (
    <motion.div className="fixed w-full h-19 shadow-2xl z-[100] bg-black">
      <motion.div className="flex justify-between items-center w-full h-full">
        <Link href="/">
        <Image
          src="Logo.svg"
          alt="/"
          width="200"
          height="100"
          className="mx-2"
        />
        </Link>
        <div>
          <ul className="hidden md:flex text-white">
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center h-8 w-20 mx-2 hover:underline"
            >
              <Link href="/" scroll={false}>
                <li className="px-5 text-sm uppercase">Work</li>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center h-8 mx-2 w-20 hover:underline"
            >
              <Link href="/about" scroll={false}>
                <li className="px-5 text-sm uppercase">About</li>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center h-8 w-20 mx-2 hover:underline"
            >
              <Link href="/contact" scroll={false}>
                <li className="px-5 text-sm uppercase ">Contact</li>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center h-8 w-20 mx-2 hover:underline"
            >
              <Link href="/#resume" scroll={false}>
                <li className="px-5 text-sm uppercase ">Resume</li>
              </Link>
            </motion.div>
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden cursor-pointer">
          <AiOutlineMenu size={25} className="text-2xl text-white" />
        </div>
      </motion.div>

      <div
        className={
          show ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70" : ""
        }
      >
        <div
          className={
            show
              ? "fixed left-0 top-0 w-[65%] sm:w-[60%] md:w-[45%] h-full bg-slate-100 p-1 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-1 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="Logo.svg"
                alt="/"
                width="150"
                height="50"
                className="rounded"
              />
              <div
                onClick={handleNav}
                className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={15} />
              </div>
            </div>
            <div className="border-b border-slate-400 my-4 text-center">
              <p>Let's build something together.</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase ml-3">
              <Link href="/#work" onClick={handleNav} scroll={false}>
                <li className="py-4 text-sm border-b border-gray-300">Work</li>
              </Link>
              <Link href="/#about" onClick={handleNav} scroll={false}>
                <li className="py-4 text-sm border-b border-gray-300">
                  About
                </li>
              </Link>
              <Link href="/#contact" onClick={handleNav} scroll={false}>
                <li className="py-4 text-sm border-b border-gray-300">
                  Contact
                </li>
              </Link>
              <Link href="/#resume" onClick={handleNav} scroll={false}>
                <li className="py-4 text-sm border-b border-gray-300">
                  Resume
                </li>
              </Link>
            </ul>
            <div className="mt-8">
              <p className="uppercase tracking-widest text-sky-600 ml-2">
                Let's Connect
              </p>
              <div className="flex items-center justify-around my-6 w-full sm:w[80%] text-3xl">
                <div className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duratation-300">
                  <Link
                    href="https://www.linkedin.com/in/ankur-d-4820a1244/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
                <div className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duratation-300">
                  <Link href="https://github.com/Nafis3000" target="_blank">
                    <FaInstagram />
                  </Link>
                </div>
                <div className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duratation-300">
                  <Link href="mailto:ankdixit097@gmail.com" target="_blank">
                    <AiOutlineMail />
                  </Link>
                </div>
                <div className="rounded shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duratation-300">
                  <Link
                    href="https://www.freecodecamp.org/fcc12f59cba-6269-44ac-9407-65b90082c113"
                    target="_blank"
                  >
                    <FaFreeCodeCamp />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
