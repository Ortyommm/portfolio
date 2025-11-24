import styles from "../../Sidebar.module.scss";
import { SidebarNavLink } from "../components/SidebarNavLink/SidebarNavLink";
import React, { ReactElement } from "react";
import { SidebarLink } from "../components/SidebarLink/SidebarLink";

interface Props {
  linksData: {
    Icon: ({
      width,
      height,
    }: {
      width: string;
      height: string;
    }) => ReactElement;
    to: string;
  }[];
  isNavigationLinks: boolean;
}

export function SidebarLinks({ linksData, isNavigationLinks }: Props) {
  const linkEls = [];
  const CurrentLinkEl = isNavigationLinks ? SidebarNavLink : SidebarLink;
  for (const linkData of linksData) {
    const PassedIcon = linkData.Icon;
    linkEls.push(
      <CurrentLinkEl
        key={linkData.to}
        to={linkData.to}
        icon={
          <div className={styles.icon}>
            {<PassedIcon width={"1em"} height={"1em"} />}
          </div>
        }
      />,
    );
  }

  return <>{linkEls}</>;
}
