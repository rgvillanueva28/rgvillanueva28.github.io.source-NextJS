import LayoutComponent from "../components/layout";
import Head from "next/head";
import ContactCard from "../components/cards/contactCard";

export default function Contact() {
  return (
    <LayoutComponent>
      <Head>
        <title>RANE GILLIAN | Contact</title>
      </Head>
      <div>
        <ContactCard />
      </div>
    </LayoutComponent>
  );
}
