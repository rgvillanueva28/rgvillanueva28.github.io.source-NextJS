import LayoutComponent from "../components/layout";
import Head from "next/head";
import AboutCard from "../components/cards/aboutCard";

export default function About() {
  return (
    <LayoutComponent>
      <Head>
        <title>RANE GILLIAN | Portfolio</title>
      </Head>
      <div className="container mx-auto">
        <AboutCard />
      </div>
    </LayoutComponent>
  );
}
