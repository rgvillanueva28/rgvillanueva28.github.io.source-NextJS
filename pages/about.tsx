import LayoutComponent from "../components/layout";
import Head from "next/head";
import AboutCard from "../components/cards/aboutCard";

export default function About() {
  return (
    <LayoutComponent>
      <Head>
        <title>RANE GILLIAN | About</title>
      </Head>
      <div className="container mx-auto flex flex-col">
        <AboutCard />
      </div>
    </LayoutComponent>
  );
}
