import LayoutComponent from "../components/layout";
import Head from "next/head";
import Card from "../components/card";

export default function About() {
  return (
    <LayoutComponent>
      <Head>
        <title>RANE GILLIAN | Portfolio</title>
      </Head>
      <div className="container mx-auto flex flex-col">
        <Card>
          <h6 className="text-center text-accent-light">Coming Soon!</h6>
        </Card>
      </div>
    </LayoutComponent>
  );
}