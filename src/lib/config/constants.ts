// Global URL constants. Import from anywhere via `@/lib/config`.

// Contact
export const CONTACT_EMAIL_ME = "me@timonwa.com";

// Every link to a site I own carries this, so Umami on the destination can
// attribute the visit to this hub — and `utm_campaign` says which card sent
// them. Third-party links (socials, BuyMeACoffee, Selar, Substack) are left
// bare: those platforms don't surface UTM back to me, so it would be noise.
const REFERRAL = "utm_source=links_timonwa_com&utm_medium=referral";
const from = (campaign: string) => `?${REFERRAL}&utm_campaign=${campaign}`;

// Social handles — third-party, deliberately untagged (see REFERRAL above).
export const SOCIAL_GITHUB = "https://github.com/timonwa";
export const SOCIAL_LINKEDIN = "https://linkedin.com/in/timonwa";
export const SOCIAL_TWITTER = "https://x.com/timonwa_";
export const SOCIAL_INSTAGRAM = "https://instagram.com/timonwa_";
export const SOCIAL_YOUTUBE = "https://youtube.com/@timonwa";
export const SOCIAL_TELEGRAM = "https://t.me/timonwa";
export const SOCIAL_BLUESKY = "https://bsky.app/profile/timonwa.bsky.social";

// My websites
export const WEBSITE_WWW = `https://www.timonwa.com${from("website")}`;
export const WEBSITE_TECH = `https://tech.timonwa.com${from(
  "engineering_portfolio"
)}`;
// No query: this is a base for `${WEBSITE_ODD_JOBS}/<slug>` links, which a
// query string would break. Those links append ODD_JOBS_REFERRAL_QUERY.
export const WEBSITE_ODD_JOBS = "https://odd-jobs.timonwa.com";
export const ODD_JOBS_REFERRAL_QUERY = from("link_hub");

// Projects — the Studio keeps the full list; each card keeps its own campaign.
export const WEBSITE_STUDIO = `https://studio.timonwa.com${from("studio")}`;
export const PROJECT_FIREBASE_HOOKS = `https://firebase-hooks.vercel.app${from(
  "firebase_hooks"
)}`;
export const PROJECT_JAVASCRIPT_PROJECTS = `https://javascript-projects.timonwa.com${from(
  "javascript_projects"
)}`;
export const PROJECT_TECH_ROADMAP = `https://roadmaps.timonwa.com${from(
  "tech_roadmap"
)}`;

// AI skills — shop pages are tagged; GitHub is third-party, so it stays bare.
export const SKILLS_TECHNICAL_WRITING = `https://www.timonwa.com/shop/technical-writing-skills${from(
  "technical_writing_skills"
)}`;
export const SKILLS_CONTENT_WRITING = `https://www.timonwa.com/shop/content-writing-skills${from(
  "content_writing_skills"
)}`;
export const SKILLS_ENGINEERING =
  "https://github.com/Timonwa/engineering-skills";
export const SKILLS_ALL =
  "https://github.com/Timonwa?tab=repositories&q=skills";

// My links
export const SHOP_LINK = `https://www.timonwa.com/shop${from("shop")}`;
export const SUPPORT_LINK = `https://www.timonwa.com/support${from("support")}`;
export const CAREER_LINK = `https://www.timonwa.com/career${from("career")}`;

// Support — third-party checkout platforms, untagged.
export const SUPPORT_BUYMEACOFFEE = "https://www.buymeacoffee.com/timonwa";
export const SUPPORT_SELAR = "https://selar.co/showlove/timonwa";

// Work-with-me resources — link to the vanity routes on the main site (which
// redirect to the real Drive/Notion docs). The destination is maintained once
// on www, so updating a redirect there updates every site automatically.
export const RESOURCE_PRESS_KIT = `https://www.timonwa.com/press-kit${from(
  "press_kit"
)}`;
// Campaign is `my_writing_portfolio`, not `writer_portfolio` — the latter is a
// character away from the `writers_portfolio` template sold in the shop, and the
// two are different things (my portfolio vs a product).
export const RESOURCE_WRITER_PORTFOLIO = `https://www.timonwa.com/w/portfolio${from(
  "my_writing_portfolio"
)}`;

// Blogs
export const BLOG_TIMONWAS_NOTES = `https://tech.timonwa.com/blog${from(
  "notes_blog"
)}`;
export const BLOG_ODD_JOBS = `https://odd-jobs.timonwa.com/blog${from(
  "odd_jobs_blog"
)}`;
export const BLOG_SIGNEDT = "https://timonwa.substack.com/";

// Product links — each keeps its own campaign, so a click is attributable to
// the specific product rather than lumped under the generic link-hub campaign.
export const TEMPLATE_WRITERS_PORTFOLIO = `https://www.timonwa.com/shop/writers-portfolio${from(
  "writers_portfolio"
)}`;
export const TEMPLATE_IDEA_INCUBATOR = `https://www.timonwa.com/shop/idea-incubator${from(
  "idea_incubator"
)}`;
export const TEMPLATE_GOALS_PLANNER = `https://www.timonwa.com/shop/goals-planner${from(
  "yearly_goals_planner"
)}`;

// Self-hosted Umami
export const ANALYTICS_UMAMI = "https://analytics.timonwa.com";
