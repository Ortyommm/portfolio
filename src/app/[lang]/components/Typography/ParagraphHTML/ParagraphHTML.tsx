import React from "react";
import styles from "./ParagraphHTML.module.scss";
import { Paragraph } from "@/app/[lang]/components/Typography/Paragraph/Paragraph";

export function ParagraphHTML({
  children,
  className,
  ...rest
}: {
  children: string;
  className?: string;
}) {
  return (
    <Paragraph className={className} {...rest}>
      <span className={styles.html_styles} dangerouslySetInnerHTML={{__html: children}}></span>
    </Paragraph>
  );
}
