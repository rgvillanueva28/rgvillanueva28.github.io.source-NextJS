import Head from "next/head";
import Header from "../components/header";

export default function LayoutComponent({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal website of Rane Gillian created with Next.JS"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />

      {children}
    </>
  );
}
