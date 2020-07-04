import Link from "next/link";
import { MdSchool, MdMail } from "react-icons/md";
import { FaBuilding, FaRegCalendar } from "react-icons/fa";

export default function AboutCard() {
  return (
    <div className="m-5 sm:m-10 md:m-16 py-10 px-2 sm:px-5 md:px-10 lg:px-16 rounded-md shadow-lg bg-gray-100 md:flex md:flex-wrap items-center">
      <div>
        <img
          src="/logo.png"
          className="w-24 md:w-32 xl:w-40 md:mr-5 mx-auto mb-5 md:mb-0 bg-gray-500 rounded-full "
        />
      </div>
      <div className="text-center md:text-left md:flex md:flex-1 md:flex-wrap justify-between">
        <div className="p-1">
          <h4 className="text-xl sm:text-2xl xl:text-4xl">
            <strong>Rane Gillian Villanueva</strong>
          </h4>
          <p className="text-gray-600">
            <MdSchool className="inline text-black mr-1 my-auto" />
            B.S. Computer Engineering
          </p>
          <p className="text-gray-600">
            <FaBuilding className="inline text-black mr-1 my-auto" />
            Mapua University
          </p>
          <p className="text-gray-600">
            <FaRegCalendar className="inline text-black mr-1 my-auto" />
            2018 - present
          </p>
          <p className="text-gray-600">
            <MdMail className="inline text-black mr-1 my-auto" />
            rgvillanueva28@gmail.com
          </p>
        </div>
        <div className="p-1 my-auto">
          <Link href="/contact">
            <button className="transition duration-300 ease-in-out p-2 px-4 bg-red-600 rounded-lg text-white border-2 border-transparent hover:bg-red-500 hover:border-red-600 focus:outline-none">
              <a>Contact</a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
