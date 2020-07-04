import Head from "next/head";
import LayoutComponent from "../components/layout";
import CardOne from "../components/cardOne";
import CardTwo from "../components/cardTwo";
import FrontMan from "../components/frontMan";

import { useSpring, animated } from "react-spring";

export default function Home() {
  return (
    <LayoutComponent>
      <Head>
        <title>RANE GILLIAN</title>
      </Head>

      <div className="container mx-auto">
        {/* <FrontMan /> */}

        <CardOne />

        <CardTwo />
      </div>
    </LayoutComponent>
  );
}
