import { siteConfig } from "@/config";
import Content from "@/components/home/Content";
import { Fragment } from "react";
import DocHead from "@/components/navigation/Head";

function Home() {
  return (
    <Fragment>
      <DocHead
        url={siteConfig?.url}
        title={siteConfig?.title}
        description={siteConfig?.description}
        imageUrl={siteConfig?.cover_image}
        imageAlt={siteConfig?.cover_image_alt}
      />
      <Content />
    </Fragment>
  );
}

export default Home;
