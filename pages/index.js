import Head from "next/head";
import LayoutComponent from "../components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <LayoutComponent>
      <Head>
        <title>RANE GILLIAN</title>
      </Head>
      <div className="container-sm mx-auto">
        <div className="text-center container-sm m-5 sm:m-10 md:m-16 py-10 px-10 sm:px-20 md:px-32 lg:px-64 rounded-md shadow-xs bg-gray-100">
          <img
            src="/logo.png"
            className="w-24 md:w-48 xl:w-64 mx-auto mb-5 rounded-full bg-gray-500"
          />
          <h4>
            <strong>RANE GILLIAN VILLANUEVA</strong>
          </h4>
          <p className="xxl:px-64 xl:px-40 lg:px-12 sm:px-6 px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      <div className="container-sm mx-auto ">
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

            <div className="my-auto">
              <Link href="/contact">
                <a className="p-2 px-4 bg-red-600 rounded-lg text-white hover:bg-red-500 hover:border-red-800 hover:border-2 focus:outline-none">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
}
