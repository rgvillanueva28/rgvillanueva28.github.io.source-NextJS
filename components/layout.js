import Link from "next/link";

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

export default function LayoutComponent({ children }) {
  return (
    <>
      <header className="sm:flex sm:justify-between sm:items-center sm:p-5 bg-teal-500">
        <nav className="block">
          {pages.map(({ label, href }) => (
            <Link href={href}>
              <a className="no-underline p-5 hover:bg-gray-500">{label}</a>
            </Link>
          ))}
        </nav>
      </header>

      {children}
    </>
  );
}
