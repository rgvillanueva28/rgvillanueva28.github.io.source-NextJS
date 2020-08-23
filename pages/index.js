import Head from "next/head";
import LayoutComponent from "../components/layout";
import CardOne from "../components/cards/cardOne";
import AboutCard from "../components/cards/aboutCard";
import FrontMan from "../components/frontMan";

import { useSpring, animated } from "react-spring";

export default function Home() {
  

  return (
    <LayoutComponent>
      <Head>
        <title>RANE GILLIAN</title>
      </Head>
      <div className="container mx-auto flex flex-col">
        {/* <FrontMan /> */}

        <CardOne/>

        <AboutCard />
        <div className="p-1"></div>
      </div>
    </LayoutComponent>
  );
}
