import { Wrench } from "lucide-react";
import { CardGridSection } from "@/components/ui";
import { tools } from "@/lib/data/tools";
import { ODD_JOBS_REFERRAL_QUERY, WEBSITE_ODD_JOBS } from "@/lib/config";

export function ToolsSection() {
  return (
    <CardGridSection
      id="tools"
      title="Tools I've Built"
      description="Free web tools I've made to make work (and life) a little easier."
      items={tools.map((t) => ({
        name: t.name,
        url: t.href,
        icon: Wrench,
        description: t.tagline,
      }))}
      seeAll={{
        name: "See all tools",
        url: `${WEBSITE_ODD_JOBS}/tools${ODD_JOBS_REFERRAL_QUERY}`,
        description: "Browse the full tools directory.",
      }}
    />
  );
}
