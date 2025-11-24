import { ReactElement } from "react";
import styles from "./Heading.module.scss";
import clsx from "clsx";
interface HeadingProps {
  children: string;
  type?: "h1" | "h2";
}

export function Heading({ children, type = "h1" }: HeadingProps): ReactElement {
  if (type === "h1") {
    return <h1 className={styles.heading}>{children}</h1>;
  }
  return <h2 className={clsx(styles.heading, styles.h2)}>{children}</h2>;
}
