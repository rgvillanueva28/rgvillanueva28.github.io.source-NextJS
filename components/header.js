import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaCaretUp } from "react-icons/fa";
import { Spring, Transition, animated } from "react-spring/renderprops.cjs";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import sections from "./sections"

export default function Header(props) {

  const scrollToTop = () => {
    scroll.scrollToTop({duration:500});
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header
      id="header"
      className={
        "fixed w-full lg:px-16 px-6 lg:py-0 py-2 flex flex-wrap items-center " +
        (toggleMenu ? "bg-accent-dark" : (props.onTop ? "bg-transparent" : "bg-accent-dark"))

      }
    >
      {/* left part */}
      <div className="flex-1 flex justify-between items-center text-foreground">
        <Link href="/">
          <a className="fill-current">
            <img
              className="bg-foreground rounded-full"
              src="/logo.png"
              width="32"
              height="32"
              onClick={scrollToTop}
            />
          </a>
        </Link>
        <div className="m-0 mr-auto p-0 pl-1 my-auto">
          <h1 className="ranegillian text-2xl text-foreground">
            <strong>RANE</strong>GILLIAN
          </h1>
        </div>
      </div>

      {/* responsive */}

      <div
        className="transition duration-200 cursor-pointer lg:hidden  focus:outline-none hover:bg-accent-light border border-transparent hover:border-foreground rounded-md p-1 py-3 relative"
        style={{ minHeight: 42, minWidth: 42 }}
        onClick={() => setToggleMenu(!toggleMenu)}
        id="toggle-menu"
      >
        <Transition
          items={toggleMenu}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(toggleMenu) =>
            toggleMenu
              ? (props) => (
                <div className="absolute" style={{ top: "4px" }}>
                  <FaCaretUp style={props} color="#EEF4ED" size={32} />
                </div>
              )
              : (props) => (
                <div className="absolute" style={{ top: "4px" }}>
                  <FaBars style={props} color="#EEF4ED" size={32} />
                </div>
              )
          }
        </Transition>

        {/* {toggleMenu ? (
          <FaCaretUp color="white" size="32" />
        ) : (
          <FaBars color="white" size="32" />
        )} */}
      </div>

      {/* right part */}
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
                <Link href="/" scroll={false}>
                    <ScrollLink
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
                </Link>
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


                    {/* <Link href={href}>
                      <a
                        className="transition duration-200 lg:py-4 py-3 px-5 block border-b-2 border-transparent hover:border-foreground hover:bg-accent-light"
                        onClick={() => setToggleMenu(false)}
                      >
                        {label}
                      </a>
                    </Link> */}
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
