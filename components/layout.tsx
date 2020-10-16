import Head from "next/head";
import Header from "../components/header";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LayoutComponent({ children }: any) {
  let listener: any= null;
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
    <div className="">
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
      <motion.div
        key="mainContainer"
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
            y: -100,
          },
          pageAnimate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.25,
              type: "spring",
              stiffness: 500
            },
          },
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}