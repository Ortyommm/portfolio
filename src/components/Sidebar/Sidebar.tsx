import { Icon, InlineIcon } from "@iconify/react";
import baselineAccountCircle from "@iconify/icons-ic/baseline-account-circle";
import baselineConstruction from "@iconify/icons-ic/baseline-construction";
import baselineDashboard from "@iconify/icons-ic/baseline-dashboard";
import baselineMail from "@iconify/icons-ic/baseline-mail";
import telegramFill from "@iconify/icons-akar-icons/telegram-fill";
import vkFill from "@iconify/icons-akar-icons/vk-fill";
import githubFill from "@iconify/icons-akar-icons/github-fill";

import * as cl from "./Sidebar.module.scss";
import SidebarLink from "./SidebarLink";
import React from "react";
import SidebarLinks from "./SidebarLinks";
import { githubLink, telegramLink, vkLink } from "../../config";
import { getLocaleByPathName } from "../../helpers/getLocale";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import isBrowser from "../../helpers/isBrowser";
import { Languages } from "../../types";

function localePrefix(locale: string) {
  if (locale === "ru") return "";
  return `/${locale}`;
}

const Sidebar = ({ lang }: { lang: Languages }) => {
  const internalLinks = [
    {
      to: `${localePrefix(lang)}` || "/",
      icon: baselineAccountCircle,
    },
    {
      to: `${localePrefix(lang)}/skills`,
      icon: baselineConstruction,
    },
    {
      to: `${localePrefix(lang)}/projects`,
      icon: baselineDashboard,
    },
    {
      to: `${localePrefix(lang)}/contact`,
      icon: baselineMail,
    },
    {
      to: `${localePrefix(lang)}/videos`,
      icon: "ic:round-smart-display",
    },
  ];

  const externalLinks = [
    {
      to: vkLink,
      icon: vkFill,
    },
    {
      to: telegramLink,
      icon: telegramFill,
    },
    {
      to: githubLink,
      icon: githubFill,
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
