import { Inter } from "@next/font/google";
import { motion } from "framer-motion";
import Work from "@/components/Work";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Work />
    </>
  );
}
