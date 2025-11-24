import styles from "../../Skills.module.scss";
import React, { ReactNode } from "react";
import { Paragraph } from "@/app/[lang]/components/Typography/Paragraph/Paragraph";
import { Heading } from "@/app/[lang]/components/Typography/Heading/Heading";

export function SkillsBlock({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.skills}>
      <Heading type="h2" className={styles['skills__heading']}>{title}</Heading>
      {description ? <Paragraph>{description}</Paragraph> : null}
      <div className={styles.skills__wrapper}>{children}</div>
    </div>
  );
}
