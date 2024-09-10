export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Learn AI",
  description:
    "Build a foundation of machine learning and AI skills, and understand how to apply them in the real world..",
  navItems: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },

    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    learn: "https://learn-ai.com",
  },
};
