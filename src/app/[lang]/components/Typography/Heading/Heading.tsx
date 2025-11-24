import { ReactElement } from "react";
import styles from "./Heading.module.scss";
import clsx from "clsx";
interface HeadingProps {
  children: string;
  type?: "h1" | "h2";
  className?: string
}

export function Heading({ children, type = "h1", className }: HeadingProps): ReactElement {
  if (type === "h1") {
    return <h1 className={clsx(styles.heading, className)}>{children}</h1>;
  }
  return <h2 className={clsx(styles.heading, styles.h2, className)}>{children}</h2>;
}
