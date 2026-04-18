import { siteConfig } from "@/config";
import { Head, Html, Main, NextScript } from "next/document";
import { Fragment } from "react";

const isLocal = process.env.NODE_ENV === "development";

// Runs before React hydration to set the theme and avoid a flash of the wrong
// palette. Reads localStorage first, then falls back to prefers-color-scheme.
const themeBootstrap = `
(function () {
  try {
    var stored = localStorage.getItem('timonwa-links-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="view-transition" content="same-origin" />
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {!isLocal && (
          <Fragment>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.google_analytics}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${siteConfig.google_analytics}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </Fragment>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
