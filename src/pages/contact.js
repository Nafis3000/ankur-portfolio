import Head from "next/head";
import React from "react";

const Contact = () => {
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
      <div className="flex flex-col h-full bg-gradient-to-b from-blue-800 to-rose-400">
        Contact
      </div>
    </>
  );
};

export default Contact;
