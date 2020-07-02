import Link from "next/link";

export default function CardTwo() {
  return (
    <div className="m-5 sm:m-10 md:m-16 py-10 px-2 sm:px-5 md:px-10 lg:px-16 rounded-md shadow-xs bg-gray-100 flex flex-wrap items-center ">
      <div>
        <img
          src="/logo.png"
          className="w-24 md:w-32 xl:w-40 mx-auto mb-5 bg-gray-500 rounded-full mr-5"
        />
      </div>
      <div className="flex flex-1 flex-wrap justify-between">
        <div className="">
          <h4 className="text-xl sm:text-2xl xl:text-4xl">
            <strong>Software Developer</strong>
          </h4>
          <p className="text-gray-600">Test 1</p>
        </div>

        <div className="my-auto ">
          <Link href="/contact">
            <a className="transition duration-300 ease-in-out p-2 px-4 bg-red-600 rounded-lg text-white border-2 border-transparent hover:bg-red-500 hover:border-red-600">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
