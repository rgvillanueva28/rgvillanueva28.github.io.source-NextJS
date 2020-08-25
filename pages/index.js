import Head from "next/head";
import LayoutComponent from "../components/layout";
import CardOne from "../components/cards/cardOne";
import AboutCard from "../components/cards/aboutCard";
import FrontMan from "../components/frontMan";
import ContactCard from "../components/cards/contactCard";
import Card from "../components/card";

import { useSpring, animated } from "react-spring";
import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { BiUpArrow } from 'react-icons/bi'

export default function Home() {
  const scrollToTop = () => {
    scroll.scrollToTop({duration:500});
  };

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

        <section id="home">
          <CardOne onTop={onTop} />
        </section>

        <section id="about" className="min-h-screen">
          <AboutCard />
        </section>

        <section id="portfolio" className="min-h-screen">
          <Card>
            <h6 className="text-center text-accent-light">Coming Soon!</h6>
          </Card>
        </section>

        <section id="contact" className="min-h-screen">
          <ContactCard />
        </section>

      </div>

      <div className={"fixed bottom-0 right-0 transition ease-in duration-200 " + (onTop ? "opacity-0" : "opacity-100")}>
        <button
          onClick={scrollToTop}
          id="scrollToTop"
          className="mb-5 mr-5 px-4 w-auto h-12 bg-accent-mid rounded-full hover:bg-accent-light active:shadow-lg  mouse shadow transition ease-in duration-200 focus:outline-none border border-dark">
          <BiUpArrow className="text-foreground"/>
        </button>
      </div>


    </LayoutComponent>
  );
}