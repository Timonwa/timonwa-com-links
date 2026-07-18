import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingMenu } from "@/components/layout/FloatingMenu";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { NewslettersSection } from "@/components/sections/NewslettersSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { TemplatesSection } from "@/components/sections/TemplatesSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ShopSection } from "@/components/sections/ShopSection";
import { SupportSection } from "@/components/sections/SupportSection";
import { PressKitSection } from "@/components/sections/PressKitSection";
// import { AffiliatesSection } from "@/components/sections/AffiliatesSection";

const MENU_ITEMS = [
  { id: "templates", label: "Templates" },
  { id: "tools", label: "Tools" },
  { id: "blog", label: "Blog & Writing" },
  { id: "shop", label: "Shop" },
  { id: "support", label: "Support" },
  { id: "newsletters", label: "Newsletters" },
  { id: "press", label: "Work With Me" },
  // { id: "affiliates", label: "Affiliates" },
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-60 focus:rounded-lg focus:bg-brand-purple focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-cta"
      >
        Skip to main content
      </a>
      <div className="fixed left-5 top-5 z-50">
        <ThemeToggle />
      </div>
      <FloatingMenu items={MENU_ITEMS} />

      <div className="mx-auto max-w-165 px-5">
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          <FeaturedSection />
          <TemplatesSection />
          <ToolsSection />
          <BlogSection />
          <ShopSection />
          <SupportSection />
          <NewslettersSection />
          <PressKitSection />
          {/* <AffiliatesSection /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}
