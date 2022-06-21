import { Icon, IconifyIcon } from "@iconify/react";
import baselineAccountCircle from "@iconify/icons-ic/baseline-account-circle";
import * as cl from "./Sidebar.module.scss";
import SidebarNavLink from "./SidebarNavLink";
import React from "react";
import SidebarLink from "./SidebarLink";
import IconSvg from "../Icons/IconSvg";

export default function SidebarLinks({
  linksData,
  isNavigationLinks,
}: {
  linksData: { icon: IconifyIcon | string | JSX.Element; to: string }[];
  isNavigationLinks: boolean;
}) {
  const linkEls = [];
  const CurrentLinkEl = isNavigationLinks ? SidebarNavLink : SidebarLink;
  for (const linkData of linksData) {
    linkEls.push(
      <CurrentLinkEl
        key={linkData.to}
        to={linkData.to}
        icon={<IconSvg className={cl.icon}>{linkData.icon}</IconSvg>}
      />
    );
  }

  return <>{linkEls}</>;
}
