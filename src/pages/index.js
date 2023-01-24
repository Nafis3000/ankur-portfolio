import Head from 'next/head'
import { Inter } from '@next/font/google'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import Skills from '@/components/Skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ankur Dixit | UX Designer</title>
        <meta name="Ankur Dixit UX Designer" content="Ankur Dixit UX Designer" />
        <link rel="icon" href="/vercel.svg" />
      </Head>
      <Navbar />
      <Main />
      <Skills />
    </>
  );
}
