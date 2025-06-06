export const LinkHubIntro = {
  avatar: "/images/avatar.jpg",
  name: "Timonwa Akintokun",
  tagline: "Building tools, writing stories, and making content.",
  bio: "I'm a self-taught dev, writer, and digital creator from Nigeria. I explore tech, creativity, and productivity in my own way—explore below!",
};

export interface LinkSections {
  title: string;
  description: string;
  links: Array<{
    name?: string;
    href: string;
    icon?: string;
  }>;
}

export const IntroLinks: LinkSections = {
  title: "🌐 Follow Me Online",
  description:
    "Keep up with me on socials or drop a message. I'd love to connect!",
  links: [
    {
      name: "LinkedIn profile",
      href: "https://www.linkedin.com/in/timonwa/",
      icon: "/images/icons/linkedin-creative.svg",
    },
    {
      name: "Twitter profile",
      href: "https://twitter.com/timonwa_",
      icon: "/images/icons/twitter-creative.svg",
    },
    {
      name: "Instagram profile",
      href: "https://www.instagram.com/timonwa_",
      icon: "/images/icons/instagram-creative.svg",
    },
    // {
    //   name: "TikTok profile",
    //   href: "https://www.tiktok.com/@timonwa_",
    //   icon: "/images/icons/tiktok-creative.svg",
    // },
    {
      name: "YouTube profile",
      href: "https://youtube.com/@timonwa",
      icon: "/images/icons/youtube-creative.svg",
    },
    {
      name: "GitHub profile",
      href: "https://github.com/timonwa",
      icon: "/images/icons/github.svg",
    },
    {
      name: "Email address",
      href: "mailto:me@timonwa.com",
      icon: "/images/icons/email-creative.svg",
    },
  ],
};

export const PortfolioLinks: LinkSections = {
  title: "💼 Projects & Entrepreneurial Journey",
  description:
    "Browse my app portfolio and a timeline of startups, side projects, and creative ventures I've worked on.",
  links: [
    {
      name: "🌐 Tech Portfolio Website",
      href: "https://tech.timonwa.com/portfolio",
    },
    // {
    //   name: "📈 My Entrepreneurial Journey",
    //   href: "https://indie.timonwa.com",
    // },
  ],
};

export const BlogLinks: LinkSections = {
  title: "📚 Blogs, Newsletters & Writing",
  description:
    "Read my dev posts, productivity stories, and personal reflections across blogs and platforms.",
  links: [
    {
      name: "📝 Timonwa's Notes (Main Dev Blog)",
      href: "https://tech.timonwa.com/blog",
    },
    {
      name: "🐞 The Productive Bug (Experiments & Tips)",
      href: "https://theproductivebug.substack.com",
    },
    {
      name: "📬 Signed, T (Personal & Creative Writing)",
      href: "https://timonwa.substack.com",
    },
    {
      name: "👩🏽‍💻 Dev.to Account (Other Dev Blog)",
      href: "https://dev.to/timonwa",
    },
    {
      name: "👩🏽‍💻 Medium Account (Other Dev Blog)",
      href: "https://medium.com/@timonwa",
    },
    {
      name: "👩🏽‍💻 Hashnode Account (Other Dev Blog)",
      href: "http://timonwa.hashnode.dev/",
    },
  ],
};

export const StoreLinks: LinkSections = {
  title: "🛍️ Digital Stores & Resources",
  description:
    "Explore my templates, tools, and resources on your favorite platform—same items, just more choice.",
  links: [
    {
      name: "☕ Buy Me a Coffee Shop",
      href: "https://buymeacoffee.com/timonwa/extras",
    },
    {
      name: "🍋 Lemon Squeezy Store",
      href: "https://timonwa.lemonsqueezy.com",
    },
    {
      name: "🛒 Gumroad Store",
      href: "https://timonwa.gumroad.com",
    },
    {
      name: "📦 Selar Store",
      href: "https://selar.com/m/timonwa",
    },
  ],
};

export const ProjectLinks: LinkSections = {
  title: "🧪 Tools, Projects & Experiments",
  description:
    "Discover side projects, dev experiments, and tools I've built or contributed to over time.",
  links: [
    {
      name: "🧰 [Project Name] - Small tool for X",
      href: "#",
    },
    {
      name: "📊 [Project Name] - A productivity hack app",
      href: "#",
    },
    {
      name: "🖼️ [Project Name] - Notion kit or visual tool",
      href: "#",
    },
  ],
};

export const TalksMediaLinks: LinkSections = {
  title: "📢 Talks, Media & Press Kit",
  description:
    "Find recordings, slides, and press materials from events I've spoken at or contributed to.",
  links: [
    {
      name: "🎤 Talks, Slides & Resources",
      // href: "https://resources.timonwa.com",
      href: "https://tech.timonwa.com/talks",
    },
    // {
    //   name: "📰 Press & Media Kit",
    //   href: "https://timonwa.com/media-press-kit",
    // },
  ],
};

export const TippingLinks: LinkSections = {
  title: "💛 Support My Work",
  description:
    "If you've enjoyed my work, here are a few ways to support me or sponsor future projects.",
  links: [
    {
      name: "☕ Buy Me a Coffee",
      href: "https://www.buymeacoffee.com/timonwa",
    },
    {
      name: "💻 Sponsor on GitHub",
      href: "https://github.com/sponsors/Timonwa",
    },
    {
      name: "🫶 Show Some Love on Selar",
      href: "https://selar.co/showlove/timonwa",
    },
  ],
};

export const OtherLinks: LinkSections = {
  title: "🎨 Art, Docs & Faves",
  description:
    "Explore my art, affiliate picks, and others beyond code and content.",
  links: [
    {
      name: "🎨 Art Instagram Page",
      href: "https://instagram.com/timonwa_loves_art",
    },
    {
      name: "🔗 Affiliate Picks",
      // href: "https://affiliates.timonwa.com",
      href: "https://tech.timonwa.com/affiliate-links",
    },
    {
      name: "📄 Download My CV",
      href: "https://timonwa.com/cv",
    },
  ],
};

export const SocialMediaLinks: LinkSections = {
  title: "🌐 Follow Me Online",
  description:
    "Keep up with me on socials or drop a message. I'd love to connect!",
  links: [
    {
      name: "✉️ Email Me",
      href: "mailto:me@timonwa.com",
    },
    {
      name: "💼 LinkedIn",
      href: "https://www.linkedin.com/in/timonwa/",
    },
    {
      name: "🐦 Twitter/X",
      href: "https://twitter.com/timonwa_",
    },
    {
      name: "📸 Instagram",
      href: "https://instagram.com/timonwa_",
    },
    // {
    //   name: "🎬 TikTok",
    //   href: "https://www.tiktok.com/@timonwa_",
    // },
    {
      name: "👩🏽‍💻 GitHub",
      href: "https://www.github.com/timonwa",
    },
    {
      name: "📹 YouTube",
      href: "https://youtube.com/@timonwa",
    },
  ],
};
