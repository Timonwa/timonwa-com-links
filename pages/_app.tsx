import "@/styles/globals.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import type { ReactElement, ReactNode } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-family",
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div className={poppins.variable}>
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}
