"use client";
import { ReactNode, useEffect, useState } from "react";

import styles from "../../../Sidebar.module.scss";
import React from "react";
import Link from "next/link";
import arePathsEqual from "@/app/utils/arePathsEqual";
import { usePathname } from "next/navigation";

export function SidebarNavLink({ icon, to }: { icon: ReactNode; to: string }) {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsActive(arePathsEqual(pathname, to));
  }, [pathname, to]);
  const className = `${styles.icon__wrapper} ${isActive ? styles.active : ""}`;
  return (
    <Link className={className} href={to} style={{ color: "#FFD1C6" }}>
      {icon}
    </Link>
  );
}
