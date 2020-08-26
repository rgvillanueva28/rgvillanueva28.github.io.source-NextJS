import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

export default function CardOne({ onTop }) {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const buttons = {
    top: {
      y: [0, -10, 0],
      scale: [1, 1, 1],
    },
    notTop: {
      y: 0,
      scale: 1,
    },
  };

  return (
    <div className="flex flex-col text-center container-sm p-10 sm:px-12 md:px-20 lg:px-32 rounded-md lg:flex lg:flex-row min-h-screen justify-center">
      {/* <img
        src="/logo.png"
        className="w-24 md:w-48 xl:w-64 mx-auto mb-5 rounded-full bg-gray-500"
      /> */}
      {/* <div className="text-left  pt-5 lg:pt-0 min-h-full lg:justify-center lg:flex lg:flex-col"> */}
      <motion.div
        className="text-left lg:pt-0 min-h-full lg:justify-center lg:flex lg:flex-col lg:mr-64 lg:pr-20"
        variants={variants}
      >
        <p className="text-accent-light text-base">
          <strong>Hi there! I am</strong>
        </p>
        <p className="text-foreground text-2xl md:text-2xl lg:text-4xl">
          <strong>Rane Gillian.</strong>
        </p>
        <p className="text-foreground mb-3 text-2xl md:text-2xl lg:text-4xl">
          <strong>Aspiring Developer.</strong>
        </p>
        <p className="text-accent-light text-base mb-5">
          I am currently a Bachelor of Science in Computer Engineering student
          at Mapúa University. I am interested to learn the fields of
          Cybersecurity, Web Development, Mobile Development, Data Analysis and
          Visualization, and Artificial Intelligence. I have also created
          several projects. Check out the{" "}
          <Link href="/portfolio">
            <a className="text-foreground opacity-100 hover:opacity-75">
              portfolio
            </a>
          </Link>{" "}
          tab for more information about these projects.
        </p>
        {/* <Link href="#contact">
          <a className={"mr-auto transition duration-200 ease-in-out py-2 px-4 bg-transparent rounded-md text-accent-light border-2 border-accent-light hover:bg-accent-light hover:text-foreground focus:outline-none " + (onTop ? "animate-bounce hover:animate-none": "")}>
            Contact
          </a>
        </Link> */}

        <motion.button
          animate={onTop ? "top" : "notTop"}
          variants={buttons}
          transition={
            onTop
              ? {
                  duration: 1,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  loop: Infinity,
                  repeatDelay: 0.2,
                }
              : {}
          }
          className={
            "cursor-pointer mr-auto py-2 px-4 bg-transparent rounded-md text-accent-light border-2 border-accent-light hover:bg-accent-light hover:text-foreground focus:outline-none " +
            // (onTop ? "animate-bounce hover:animate-none" : "")
            ""
          }
        >
          <ScrollLink
            href="#contact"
            activeClass="border-foreground"
            to="contact"
            spy={true}
            hashSpy={true}
            smooth={true}
            duration={500}
            ignoreCancelEvents={true}
          >
            Contact
          </ScrollLink>
        </motion.button>
      </motion.div>
      {/* <img className="mx-5 pt-10 sm:mx-10 md:mx-16 lg:w-screen min-h-full" src="/landingImage.svg" /> */}
    </div>
  );
}
