import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ankur Dixit | UX Designer</title>
        <meta
          name="Ankur Dixit UX Designer"
          content="Ankur Dixit UX Designer"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
