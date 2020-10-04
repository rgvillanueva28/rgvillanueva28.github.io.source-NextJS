import Head from "next/head";
import Header from "../components/header";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LayoutComponent({ children }) {
  let listener = null;
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
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
      <AnimatePresence
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 300,
        }}
      >
        <Header onTop={onTop} />
        <motion.div
          key="header"
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
              transition: {
                duration: 1,
              },
            },
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
