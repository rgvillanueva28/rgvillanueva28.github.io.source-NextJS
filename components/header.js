import Link from "next/link";
import { useState } from "react";

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
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header
      className={
        "lg:px-16 px-6 lg:py-0 py-2 flex flex-wrap items-center shadow-md " +
        "bg-red-700"
      }
    >
      <div className="flex-1 flex justify-between items-center text-white">
        <Link href="#">
          <a className="fill-current">
            <img
              className="bg-white rounded-full"
              src="/logo.png"
              width="32"
              height="32"
            />
          </a>
        </Link>
        <div className="m-0 mr-auto p-0 pl-1 my-auto">
          <h1 className="ranegillian text-2xl text-white">
            <strong>RANE</strong>GILLIAN
          </h1>
        </div>
      </div>
      <label for="menu-toggle" className="cursor-pointer lg:hidden block">
        {toggleMenu ? (
          <i class="material-icons" style={{ color: "white" }}>
            menu_open
          </i>
        ) : (
          <i class="material-icons" style={{ color: "white" }}>
            menu
          </i>
        )}
      </label>
      <input
        type="checkbox"
        className="hidden"
        id="menu-toggle"
        onChange={() => setToggleMenu(!toggleMenu)}
      />
      <div
        className={
          "lg:flex lg:items-center lg:w-auto w-full text-white " +
          (toggleMenu ? "block" : "hidden")
        }
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-base pt-4 lg:pt-0">
            {pages.map(({ label, href }) => (
              <li>
                <Link href={href}>
                  <a className="lg:py-4 py-3 px-5 block border-b-2 border-transparent hover:border-red-300 hover:bg-red-500">
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
