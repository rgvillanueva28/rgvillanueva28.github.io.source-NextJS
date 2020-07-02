import Head from "next/head";
import LayoutComponent from "../components/layout";
import CardOne from "../components/cardOne";
import CardTwo from "../components/cardTwo";

import { Transition } from "react-transition-group";

export default function Home() {
  return (
    <LayoutComponent>
      <Head>
        <title>RANE GILLIAN</title>
      </Head>

      <div>
        <CardOne />

        <CardTwo />
      </div>
    </LayoutComponent>
  );
}
