import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { ANALYTICS_UMAMI, isProduction, siteConfig } from "@/lib/config";
import { personSchema, websiteSchema } from "@/lib/seo";
import { JsonLd } from "@/components/layout/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/ui";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-family",
});

// Runs before React hydration to set the theme and avoid a flash of the wrong
// palette. Honours an explicit saved choice, otherwise defaults to dark.
const themeBootstrap = `
(function () {
  try {
    var stored = localStorage.getItem('timonwa-links-theme');
    var theme = stored === 'light' || stored === 'dark' ? stored : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitter,
    creator: siteConfig.twitter,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ede4f1" },
    { media: "(prefers-color-scheme: dark)", color: "#15101a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} motion-safe:scroll-smooth`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <JsonLd data={[personSchema(), websiteSchema()]} />
        {isProduction && siteConfig.umami_website_id && (
          <>
            <Script
              src={`${ANALYTICS_UMAMI}/script.js`}
              data-website-id={siteConfig.umami_website_id}
              data-performance="true"
              strategy="afterInteractive"
            />
            <Script
              src={`${ANALYTICS_UMAMI}/recorder.js`}
              data-website-id={siteConfig.umami_website_id}
              strategy="afterInteractive"
            />
          </>
        )}
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-60 focus:rounded-lg focus:bg-brand-purple focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-cta"
        >
          Skip to main content
        </a>

        <div className="fixed left-5 top-5 z-50">
          <ThemeToggle />
        </div>

        <div className="mx-auto max-w-165 px-5">
          <Header />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
