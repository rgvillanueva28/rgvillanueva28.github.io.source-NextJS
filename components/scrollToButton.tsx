import { Link as ScrollLink } from "react-scroll";
import { BiDownArrow } from "react-icons/bi";

export default function ScrollToButton(props: any) {
  return (
    <div className="flex w-full content-center mt-5">
      <ScrollLink
        className="flex items-center justify-items-center p-4 mx-auto h-20 w-20 bg-transparent rounded-full hover:bg-accent-light active:shadow-lg  mouse shadow focus:outline-none border border-dark"
        href={props.href}
        to={props.to}
        smooth={true}
        duration={500}
      >
        <BiDownArrow className="text-accent-light mx-auto" size={40} />
      </ScrollLink>
    </div>
  );
}
