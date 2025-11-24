import styles from "./Sidebar.module.scss";
import React from "react";
import { SidebarLinks } from "./components/SidebarLinks/SidebarLinks";
import ProfileIcon from "@image/icons/profile.svg";
import SkillsIcon from "@image/icons/skills.svg";
import ProjectsIcon from "@image/icons/projects.svg";
import ContactIcon from "@image/icons/contact.svg";
import VideosIcon from "@image/icons/videos.svg";
import TelegramIcon from "@image/icons/contacts/telegram.svg";
import GithubIcon from "@image/icons/contacts/github.svg";
import { githubLink, telegramLink } from "@/consts/links";
import { SupportedLanguages } from "@/types/globalTypes";

function localePrefix(locale: SupportedLanguages) {
  return `/${locale}`;
}

export function Sidebar({ lang }: { lang: SupportedLanguages }) {
  const internalLinks = [
    {
      to: `${localePrefix(lang)}` || "/",
      Icon: ProfileIcon,
    },
    {
      to: `${localePrefix(lang)}/skills`,
      Icon: SkillsIcon,
    },
    {
      to: `${localePrefix(lang)}/projects`,
      Icon: ProjectsIcon,
    },
    {
      to: `${localePrefix(lang)}/contact`,
      Icon: ContactIcon,
    },
    {
      to: `${localePrefix(lang)}/videos`,
      Icon: VideosIcon,
    },
  ];

  const externalLinks = [
    {
      to: telegramLink,
      Icon: TelegramIcon,
    },
    {
      to: githubLink,
      Icon: GithubIcon,
    },
  ];

  return (
    <>
      <div className={styles.fake_block} />
      <div className={styles.top_nav} />
      <aside className={styles.aside}>
        <nav>
          <div className={styles.sidebar_top}>
            <SidebarLinks linksData={internalLinks} isNavigationLinks={true} />
          </div>
          <div className={styles.sidebar_bottom}>
            <SidebarLinks linksData={externalLinks} isNavigationLinks={false} />
          </div>
        </nav>
      </aside>
    </>
  );
}
