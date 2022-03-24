import React from "react";
import { ReactElement, SyntheticEvent } from "react";
import * as cl from "./Sidebar.module.scss";

const SidebarLink = ({ icon, to }: { icon: ReactElement; to: string }) => {
  return (
    <a
      className={`${cl.icon__wrapper}`}
      href={to}
      target="_blank"
      style={{ color: "#FFD1C6" }}
    >
      {icon}
    </a>
  );
};

export default SidebarLink;
