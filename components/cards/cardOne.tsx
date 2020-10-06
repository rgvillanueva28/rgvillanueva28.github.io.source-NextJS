import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

export default function CardOne({ onTop }: any) {
  const motionDiv = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        type: "spring",
      },
    },
    hidden: { opacity: 0 },
  };

  const buttons = {
    top: {
      y: [0, -10, 0],
      scale: [1, 1, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
        times: [0, 0.5, 1],
        loop: Infinity,
        repeatDelay: 0.2,
      },
    },
    notTop: {
      y: [0, 0, 0],
      scale: [1, 1, 1],
    },
  };

  const rgv = Array.from("Rane Gillian.");

  return (
    <div className="flex flex-col text-center container-sm p-10 sm:px-12 md:px-20 lg:px-24 rounded-md lg:flex lg:flex-row min-h-screen justify-center">
      {/* <img
        src="/logo.png"
        className="w-24 md:w-48 xl:w-64 mx-auto mb-5 rounded-full bg-gray-500"
      /> */}
      {/* <div className="text-left  pt-5 lg:pt-0 min-h-full lg:justify-center lg:flex lg:flex-col"> */}
      <motion.div
        className="text-left lg:pt-0 min-h-full lg:justify-center lg:flex lg:flex-col lg:mr-64 lg:pr-20 xl:pr-32"
        initial="hidden"
        animate="visible"
        variants={motionDiv}
      >
        <p className="text-accent-light text-base lg:text-lg">
          <strong>Hi there! I am</strong>
        </p>
        <motion.div
          className="flex"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {
              x: 100,
              opacity: 0,
            },
            show: {
              x: 0,
              opacity: 1,
              transition: {
                delay: 1,
                type: "spring",
                stiffness: 1000,
              },
            },
          }}
        >
          {rgv.map((rgv, index) =>
            rgv == " " ? (
              <span key={index} className="w-2"></span>
            ) : (
              <motion.strong
                key={index}
                whileHover={{
                  y: -2,
                  color: "#8DA9C4",
                  transition: {
                    type: "spring",
                    stiffness: 1500,
                  },
                }}
                className="cursor-pointer text-foreground text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-left"
              >
                {rgv}
              </motion.strong>
            )
          )}
        </motion.div>

        <p className="text-foreground mb-3 text-2xl md:text-2xl lg:text-4xl xl:text-5xl">
          <strong>Aspiring Developer.</strong>
        </p>
        <p className="text-accent-light text-base lg:text-lg mb-5">
          I am currently a Bachelor of Science in Computer Engineering student
          at Mapúa University. I am interested to learn the fields of
          Cybersecurity, Web Development, Mobile Development, Data Analysis and
          Visualization, and Artificial Intelligence. I have also created
          several projects. Check out the{" "}
          <ScrollLink
            href="/#portfolio"
            activeClass="border-foreground"
            to="portfolio"
            smooth={true}
            duration={500}
            // onClick={() => setToggleMenu(false)}
          >
            <a className="text-foreground opacity-100 hover:opacity-75">
              portfolio
            </a>
          </ScrollLink>{" "}
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
