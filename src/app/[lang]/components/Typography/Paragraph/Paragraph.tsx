import React from "react";
import { ReactNode } from "react";
import styles from "./Paragraph.module.scss";

export function Paragraph({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`${styles.paragraph} ${className}`} {...rest}>
      {children}
    </div>
  );
}
