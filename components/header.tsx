import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaCaretUp } from "react-icons/fa";
import { Spring, Transition, animated } from "react-spring/renderprops.cjs";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import sections from "./sections";

import { motion, AnimatePresence } from "framer-motion";

export default function Header(props: any) {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header
      id="header"
      className={
        "fixed w-full lg:px-16 px-6 lg:py-0 py-2 flex flex-wrap items-center " +
        (toggleMenu
          ? "bg-accent-dark"
          : props.onTop
          ? "bg-transparent"
          : "bg-accent-dark")
      }
    >
      <div className="flex-1 flex justify-between items-center">
        <Link href="/">
          <a className="fill-current">
            <motion.img
              initial={{ backgroundColor: "#EEF4ED" }}
              whileHover={{ backgroundColor: "#8DA9C4" }}
              transition={{
                type: "tween",
                duration: 0.3,
              }}
              className="rounded-full"
              alt="RG Logo"
              src="/logo.png"
              width="32"
              height="32"
              onClick={scrollToTop}
            />
          </a>
        </Link>
        <div className="m-0 mr-auto p-0 pl-1 my-auto">
          <motion.h1
            initial={{ color: "#EEF4ED" }}
            className="ranegillian text-2xl cursor-default"
            whileHover={{ color: "#8DA9C4" }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <strong>RANE</strong>GILLIAN
          </motion.h1>
        </div>
      </div>

      <div
        className="transition duration-200 cursor-pointer lg:hidden  focus:outline-none hover:bg-accent-light border border-transparent hover:border-foreground rounded-md p-1 py-3 relative"
        style={{ minHeight: 42, minWidth: 42 }}
        onClick={() => setToggleMenu(!toggleMenu)}
        id="toggle-menu"
      >
        <div className="container">
          {toggleMenu ? (
            <div className="absolute" style={{ top: "4px" }}>
              <FaCaretUp style={props} color="#EEF4ED" size={32} />
            </div>
          ) : (
            <div className="absolute" style={{ top: "4px" }}>
              <FaBars style={props} color="#EEF4ED" size={32} />
            </div>
          )}
        </div>
      </div>
      <Spring
        native
        force
        config={{ tension: 2000, friction: 100, precision: 1 }}
        from={{ height: toggleMenu ? 0 : "auto" }}
        to={{ height: toggleMenu ? "auto" : 0 }}
      >
        {(props) => (
          <animated.div
            style={props}
            className={
              "lg:flex lg:items-center lg:w-auto w-full text-foreground lg:h-auto"
            }
            id="menu"
          >
            <nav className={toggleMenu ? "visible" : "invisible lg:visible"}>
              <ul className="lg:flex items-center justify-between text-base pt-4 lg:pt-0">
                <li>
                    <ScrollLink
                      href="/"
                      activeClass="border-foreground"
                      to="home"
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={() => setToggleMenu(false)}
                      className="cursor-pointer transition duration-200 lg:py-4 py-3 px-5 block border-b-2 border-transparent hover:border-foreground hover:bg-accent-light"
                    >
                      Home
                    </ScrollLink>
                </li>
                {sections.map(({ label, id }) => (
                  <li key={label}>
                    <ScrollLink
                      href={"/#" + id}
                      activeClass="border-foreground"
                      to={id}
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      duration={500}
                      onClick={() => setToggleMenu(false)}
                      className="cursor-pointer transition duration-200 lg:py-4 py-3 px-5 block border-b-2 border-transparent hover:border-foreground hover:bg-accent-light"
                    >
                      {label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </nav>
          </animated.div>
        )}
      </Spring>
    </header>
  );
}
