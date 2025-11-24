import { HTMLAttributeAnchorTarget, ReactElement, ReactNode } from "react";
import styles from "./StyledLink.module.scss";
import Link from "next/link";
import clsx from "clsx";
interface StyledLinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

export function StyledLink({
  children,
  href,
  className,
  target,
}: StyledLinkProps): ReactElement {
  return (
    <Link target={target} className={clsx(styles.link, className)} href={href}>
      {children}
    </Link>
  );
}
