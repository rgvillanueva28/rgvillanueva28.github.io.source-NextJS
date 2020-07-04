import LayoutComponent from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <LayoutComponent>
      <Head>
        <title>RANE GILLIAN | Contact</title>
      </Head>
      <div className="container mx-auto pt-0 lg:pt-5">
        {/* <FrontMan /> */}
        <div className="mx-auto text-center">
          <div className="inline-block mx-2 bg-blue-700 rounded-full border-0">
            <a href="https://www.facebook.com/ranegillian/" target="_blank">
              <FaFacebookF size={64} className="inline text-white p-2" />
            </a>
          </div>
          <div className="inline-block mx-2 bg-blue-600 rounded-full border-0">
            <a href="https://www.linkedin.com/in/ranegv/" target="_blank">
              <FaLinkedinIn size={64} className="inline text-white p-2" />
            </a>
          </div>
          <div className="inline-block mx-2 bg-white rounded-full">
            <a href="https://github.com/rgvillanueva28" target="_blank">
              <FaGithub size={64} className="inline  text-black" />
            </a>
          </div>
          <div className="inline-block mx-2 bg-red-700 rounded-full border-0">
            <a href="mailto:rgvillanueva28@gmail.com">
              <FiMail size={64} className="inline text-white p-2" />
            </a>
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
}
