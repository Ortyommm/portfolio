import { ReactElement, SyntheticEvent, useEffect, useState } from "react";

import * as cl from "./Sidebar.module.scss";
import { Link } from "gatsby";
import React from "react";
import arePathsEqual from "../../helpers/arePathsEqual";
import isBrowser from "../../helpers/isBrowser";

const SidebarNavLink = ({ icon, to }: { icon: ReactElement; to: string }) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (isBrowser()) {
      setIsActive(arePathsEqual(window.location.pathname, to));
    }
  }, []);

  const className = `${cl.icon__wrapper} ${isActive ? cl.active : ""}`;
  return (
    <Link className={className} to={to} style={{ color: "#FFD1C6" }}>
      {icon}
    </Link>
  );
};

export default SidebarNavLink;
