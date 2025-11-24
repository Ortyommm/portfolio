import { ReactElement } from "react";
import styles from "./VideoTitle.module.scss";
import clsx from "clsx";
interface VideoTitleProps {
  children: string;
}

export function VideoTitle({ children }: VideoTitleProps): ReactElement {
  return <p className={clsx(styles.root)}>{children}</p>;
}
