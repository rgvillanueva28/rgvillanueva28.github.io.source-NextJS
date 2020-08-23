import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaCaretUp } from "react-icons/fa";
import { Spring, Transition, animated } from "react-spring/renderprops.cjs";

const pages = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header(props) {

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
        <Link href="#">
          <a className="fill-current">
            <img
              className="bg-foreground rounded-full"
              src="/logo.png"
              width="32"
              height="32"
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
                {pages.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href}>
                      <a
                        className="transition duration-200 lg:py-4 py-3 px-5 block border-b-2 border-transparent hover:border-foreground hover:bg-accent-light"
                        onClick={() => setToggleMenu(false)}
                      >
                        {label}
                      </a>
                    </Link>
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
