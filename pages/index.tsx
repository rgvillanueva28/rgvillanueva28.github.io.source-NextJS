import Head from "next/head";
import LayoutComponent from "../components/layout";
import CardOne from "../components/cards/cardOne";
import AboutCard from "../components/cards/aboutCard";
import ContactCard from "../components/cards/contactCard";
import PortfolioCard from "../components/cards/portfolioCard";
import ScrollToButton from "../components/scrollToButton";

import { useState, useEffect } from "react";
import { animateScroll as scroll, Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

import { BiUpArrow } from "react-icons/bi";

import { GetStaticProps } from "next";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home({ portfolio }: any) {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };

  let listener: any = null;
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled: any = document.scrollingElement?.scrollTop;
      if (scrolled >= 60) {
        setOnTop(false);
      } else {
        setOnTop(true);
      }
    });

    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [onTop]);

  return (
    <LayoutComponent>
      <Head>
        <title>Rane Villanueva</title>
      </Head>
      <div className="container mx-auto flex flex-col">
        {/* <FrontMan /> */}

        <section id="home" className="">
          <div className="min-h-screen pt-20 flex flex-col justify-center items-center">
            <CardOne onTop={onTop} />

            <ScrollToButton href="/#about" to="about" />
          </div>
        </section>

        <section id="about" className="min-h-screen pt-20">
          <h3 className="text-accent-light text-center pb-5 font-bold">
            <span className="gradText">About me</span>
          </h3>
          <AboutCard />
          <ScrollToButton href="/#portfolio" to="portfolio" />
        </section>

        <section id="portfolio" className="min-h-screen pt-20">
          <h3 className="text-accent-light text-center pb-5 font-bold">
            <span className="gradText">Portfolio</span>
          </h3>
          {/* <h6 className="text-center text-accent-light">Coming Soon!</h6> */}
          <PortfolioCard portfolio={portfolio} />

          <ScrollToButton href="/#contact" to="contact" />
        </section>

        <section id="contact" className="min-h-screen pt-20">
          <h3 className="text-accent-light text-center pb-5 font-bold">
            <span className="gradText">Contact</span>
          </h3>

          <ContactCard />
        </section>
      </div>

      <motion.div
        key="container"
        animate={
          onTop
            ? {
                opacity: 0,
                y: -5,
              }
            : {
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 1000,
                },
              }
        }
        className="fixed bottom-0 right-0 "
      >
        <button
          onClick={scrollToTop}
          className="mb-5 mr-5 px-4  h-16 w-16 bg-accent-mid rounded-full hover:bg-accent-light active:shadow-lg  mouse shadow focus:outline-none border border-dark"
        >
          <BiUpArrow className="text-foreground mx-auto" size={28} />
          <p className="text-xs text-white">TOP</p>
        </button>
      </motion.div>
    </LayoutComponent>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  let portfolio: any | undefined = await fetch(
    `${API_URL}/api/portfolios?populate=%2A`
  );
  portfolio = await portfolio.json();
  portfolio = portfolio?.data;

  // console.log(portfolio);

  return {
    props: {
      portfolio,
    },
    revalidate: 60,
  };
};
