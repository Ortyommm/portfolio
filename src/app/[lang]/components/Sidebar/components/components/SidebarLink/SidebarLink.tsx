import React, { ReactNode } from "react";
import styles from "../../../Sidebar.module.scss";

export function SidebarLink({ icon, to }: { icon: ReactNode; to: string }) {
  return (
    <a
      className={`${styles.icon__wrapper}`}
      href={to}
      target="_blank"
      style={{ color: "#FFD1C6" }}
    >
      {icon}
    </a>
  );
}
