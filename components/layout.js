import Head from "next/head";
import Header from "../components/header";

import { useState, useEffect } from "react";

export default function LayoutComponent({ children }) {
  let listener = null;
  const [onTop, setOnTop] = useState(true);

  useEffect( () => {
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 60) {
        setOnTop(false)
      } else {
        setOnTop(true)
      }
    })

    return () => {
      document.removeEventListener("scroll", listener)
    }

  }, [onTop])

  return (
    <div className="min-h-screen bg-dark">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal website of Rane Gillian created with Next.JS"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <Header onTop={onTop} />

      <div className="">
        {children}
      </div>
    </div>
  );
}
