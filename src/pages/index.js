import Head from "next/head";
import { Inter } from "@next/font/google";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      <Navbar />
      <Work />
    </>
  );
}
