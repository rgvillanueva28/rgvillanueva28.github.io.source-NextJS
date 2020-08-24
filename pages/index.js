import Head from "next/head";
import LayoutComponent from "../components/layout";
import CardOne from "../components/cards/cardOne";
import AboutCard from "../components/cards/aboutCard";
import FrontMan from "../components/frontMan";

import { useSpring, animated } from "react-spring";

import { useState, useEffect } from 'react';

export default function Home() {
  let listener = null;
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
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
    <LayoutComponent>
      <Head>
        <title>RANE GILLIAN</title>
      </Head>
      <div className="container mx-auto flex flex-col">
        {/* <FrontMan /> */}

        <CardOne onTop={ onTop }/>

        <AboutCard />
        <div className="p-1"></div>
      </div>
    </LayoutComponent>
  );
}