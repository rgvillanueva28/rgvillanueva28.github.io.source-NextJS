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
    <nav>
      <ul>
        {pages.map(({ label, href }) => (
          <li key={label}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
