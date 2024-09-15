import { siteConfig } from "@/config";
import Head from "next/head";

const DocHead = (props) => (
  <Head>
    {/* language */}
    <meta httpEquiv="Content-Language" content="en" />

    {/* favicon */}
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    {/* Title */}
    <title>{props?.title}</title>

    {/* SEO Meta Tags */}
    {/* Primary Meta Tags */}
    <meta name="title" content={props?.title} />
    <meta name="description" content={props?.description} />
    <meta
      name="type"
      content={props?.type === "article" ? "article" : "website"}
    />
    <meta
      name="author"
      content={props?.author ? props?.author : siteConfig?.author}
    />
    {props?.date && (
      <meta property="article:published_time" content={props?.date} />
    )}
    {/* {props?.date && (
      <meta property="article:modified_time" content={props?.date} />
    )} */}

    {/* Open Graph / Facebook Meta Tags */}
    <meta
      property="og:type"
      content={props?.type === "article" ? "article" : "website"}
    />
    <meta property="og:url" href={props?.url} />
    <meta property="og:title" content={props?.title} />
    <meta property="og:description" content={props?.description} />
    {props?.imageUrl && <meta property="og:image" content={props?.imageUrl} />}
    {props?.imageAlt && (
      <meta property="og:image:alt" content={props?.imageAlt} />
    )}

    {/* X (Twitter) Meta Tags */}
    <meta
      name="twitter:card"
      content={props?.imageUrl ? "summary_large_image" : "summary"}
    />
    <meta name="twitter:site" content={siteConfig?.twitter} />
    <meta name="twitter:creator" content={siteConfig?.twitter} />
    <meta name="twitter:title" content={props?.title} />
    <meta name="twitter:description" content={props?.description} />
    {props?.imageUrl && (
      <meta property="twitter:image" content={props?.imageUrl} />
    )}
    {props?.imageAlt && (
      <meta property="twitter:image:alt" content={props?.imageAlt} />
    )}

    {/* canonical url */}
    {props?.canonicalUrl && <link rel="canonical" href={props?.canonicalUrl} />}
  </Head>
);

export default DocHead;
