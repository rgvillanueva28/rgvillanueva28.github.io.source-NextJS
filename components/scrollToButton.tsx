import { Link as ScrollLink } from "react-scroll";
import { BiChevronsDown } from "react-icons/bi";

export default function ScrollToButton(props: any) {
  return (
    <div className="flex w-full content-center mt-5">
      <ScrollLink
        className="mx-auto"
        href={props.href}
        to={props.to}
        smooth={true}
        duration={500}
      >
        <BiChevronsDown className="text-accent-light mx-auto hover:text-foreground" size={52} />
      </ScrollLink>
    </div>
  );
}
