import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Head>
        <title>Ankur Dixit | UX Designer</title>
        <meta
          name="Ankur Dixit UX Designer"
          content="Ankur Dixit UX Designer"
        />
        <link rel="icon" href="/vercel.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="flex flex-col sm:flex-row h-full">
        <div className="flex flex-col justify-center items-center w-full sm:w-1/2 bg-gradient-to-b from-blue-800 to-rose-400">
          <div className="text-white flex flex-col justify-start p-8 mt-2">
            <h1 className="text-6xl py-4 px-3 tracking-wide">
              A little about me...
            </h1>
            <p className="text-2xl p-3 tracking-widest">
              My name is Ankur Dixit and I am a junior developer and a UX
              designer in Vancouver.
            </p>
            <p className="text-2xl p-3 tracking-widest">
              I am a tech enthusiast focused on design and creating incredible
              experiences for people from all backgrounds.
            </p>
            <p className="text-2xl p-3 tracking-widest">
              I believe in making is simple but making it significant.
            </p>
          </div>
          <button
            type="button"
            class="inline-block rounded bg-neutral-800 px-6 pt-2.5 pb-2 mb-6 text-2xl font-medium leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_#332d2d] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.3),0_4px_18px_0_rgba(51,45,45,0.2)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#171717] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(27,27,27,0.3),0_4px_18px_0_rgba(27,27,27,0.2)]"
          >
            <Link href="/contact">Contact Me</Link>
          </button>
        </div>
        <div className="w-full sm:w-1/2 sm:mt-10 flex justify-center items-center">
          <Image src="about.svg" width={500} height={500}></Image>
        </div>
      </div>
    </>
  );
};

export default About;
