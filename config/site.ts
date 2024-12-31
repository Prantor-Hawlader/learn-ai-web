import { Session } from "next-auth";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Learn AI",
  description:
    "Learn Ultimate Python from scratch with no tutorials hell. Learn with interactive lessons, practice with live editors and real-time feedback.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "Courses",
      href: "/courses/python",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Admin",
      href: "/admin",
      shouldShow: (session: Session) => session?.user?.role === "admin",
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
};
