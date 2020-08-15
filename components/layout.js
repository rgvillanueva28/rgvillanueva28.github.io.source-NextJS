import Head from "next/head";
import Header from "../components/header";

export default function LayoutComponent({ children }) {
  return (
    <div className="min-h-screen bg-black">
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

      <div className="pt-16">{children}</div>
    </div>
  );
}
