import "../styles/index.css";
import "../styles/progressBar.css";
import Router from "next/router";
import NProgress from "nprogress";
import { AppProps } from "next/app";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}