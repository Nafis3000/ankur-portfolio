import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ankur Dixit | UX Designer</title>
        <meta name="Ankur Dixit UX Designer" content="Ankur Dixit UX Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </>
  );
}
