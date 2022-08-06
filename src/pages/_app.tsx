import type { AppProps } from "next/app";

//------------- Styles ------------- //
import "antd/dist/antd.css";
import "@/styles/app.scss";
import "@/styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
