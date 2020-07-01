import Head from "next/head";
import LayoutComponent from "../components/layout";

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
            className="w-24 md:w-48 xl:w-64 mx-auto mb-5 rounded-full"
          />
          <h4>
            <strong>ABOUT ME</strong>
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
    </LayoutComponent>
  );
}
