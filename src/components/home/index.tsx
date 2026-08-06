import { FloatingMenu } from "@/components/layout/FloatingMenu";
import { FeaturedSection } from "./FeaturedSection";
import { ProductsSection } from "./ProductsSection";
import { ToolsSection } from "./ToolsSection";
import { WritingSection } from "./WritingSection";
import { SupportSection } from "./SupportSection";
import { CareerSection } from "./CareerSection";

// The link hub's single page — every section jumps from the floating menu.
const MENU_ITEMS = [
  { id: "featured", label: "Featured" },
  { id: "products", label: "Digital Products" },
  { id: "tools", label: "Tools" },
  { id: "writing", label: "Writing" },
  { id: "support", label: "Support" },
  { id: "press", label: "Work With Me" },
];

export default function HomePageContent() {
  return (
    <>
      <FloatingMenu items={MENU_ITEMS} />
      <FeaturedSection />
      <ProductsSection />
      <ToolsSection />
      <WritingSection />
      <SupportSection />
      <CareerSection />
    </>
  );
}
