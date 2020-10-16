import Link from "next/link";
import { MdSchool, MdMail } from "react-icons/md";
import { FaBuilding, FaRegCalendar } from "react-icons/fa";
import Card from "../card";

export default function AboutCard() {
  return (
    <Card className="md:flex md:flex-wrap h-auto">
      <div>
        <img
          src="/logo.png"
          className="w-24 md:w-32 xl:w-40 md:mr-5 mx-auto mb-5 md:mb-0 bg-gray-500 rounded-full "
        />
      </div>
      <div className="text-center md:text-left md:flex md:flex-1 md:flex-wrap justify-between">
        <div className="p-1">
          <h4 className="text-xl sm:text-2xl xl:text-4xl text-foreground">
            <strong>Rane Gillian Villanueva</strong>
          </h4>
          <p className="text-accent-light">
            <MdSchool className="inline text-accent-light mr-1 my-auto" />
            B.S. Computer Engineering
          </p>
          <p className="text-accent-light">
            <FaBuilding className="inline text-accent-light mr-1 my-auto" />
            Mapúa University
          </p>
          <p className="text-accent-light">
            <FaRegCalendar className="inline text-accent-light mr-1 my-auto" />
            2018 - present
          </p>
          <p className="text-accent-light">
            <MdMail className="inline text-accent-light mr-1 my-auto" />
            rgvillanueva28@gmail.com
          </p>
        </div>
        {/* <div className="p-1 my-auto">
          <Link href="/contact">
            <a className="transition duration-200 ease-in-out py-2 px-4 bg-transparent rounded-md text-accent-light border-2 border-accent-light hover:bg-accent-light hover:text-foreground focus:outline-none mr-auto mt-5">
              Contact
            </a>
          </Link>
        </div> */}
      </div>
    </Card>
  );
}
