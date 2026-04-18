import "@/styles/globals.scss";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import type { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

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
    <ThemeProvider>
      <div className={poppins.variable} style={{ fontFamily: "var(--font-family)" }}>
        {getLayout(<Component {...pageProps} />)}
      </div>
    </ThemeProvider>
  );
}
