import * as cl from "./Sidebar.module.scss";
import React from "react";
import SidebarLinks from "./SidebarLinks";
import { githubLink, telegramLink, vkLink } from "../../config";
import { Languages } from "../../types";
import {
  ContactIcon,
  GithubIcon,
  ProfileIcon,
  ProjectsIcon,
  SkillsIcon,
  TelegramIcon,
  VideosIcon,
  VkIcon,
} from "../Icons/Icons";

function localePrefix(locale: string) {
  if (locale === "ru") return "";
  return `/${locale}`;
}

const Sidebar = ({ lang }: { lang: Languages }) => {
  const internalLinks = [
    {
      to: `${localePrefix(lang)}` || "/",
      icon: ProfileIcon,
    },
    {
      to: `${localePrefix(lang)}/skills`,
      icon: SkillsIcon,
    },
    {
      to: `${localePrefix(lang)}/projects`,
      icon: ProjectsIcon,
    },
    {
      to: `${localePrefix(lang)}/contact`,
      icon: ContactIcon,
    },
    {
      to: `${localePrefix(lang)}/videos`,
      icon: VideosIcon,
    },
  ];

  const externalLinks = [
    {
      to: vkLink,
      icon: VkIcon,
    },
    {
      to: telegramLink,
      icon: TelegramIcon,
    },
    {
      to: githubLink,
      icon: GithubIcon,
    },
  ];

  return (
    <>
      <div className={cl.fake_block} />
      <div className={cl.top_nav} />
      <aside className={cl.aside}>
        <nav>
          <div className={cl.sidebar_top}>
            <SidebarLinks linksData={internalLinks} isNavigationLinks={true} />
          </div>
          <div className={cl.sidebar_bottom}>
            <SidebarLinks linksData={externalLinks} isNavigationLinks={false} />
          </div>
        </nav>
      </aside>
    </>
  );
};
export default Sidebar;
