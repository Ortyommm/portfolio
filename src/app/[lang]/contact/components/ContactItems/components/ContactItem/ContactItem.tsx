import styles from "../../../../Contact.module.scss";
import React from "react";
import { IconWrapper } from "@/app/[lang]/components/IconWrapper/IconWrapper";
import { Paragraph } from "@/app/[lang]/components/Typography/Paragraph/Paragraph";

export function ContactItem({
  icon,
  href,
  title,
}: {
  icon: React.FC;
  href: string;
  title: string;
}) {
  return (
    <Paragraph className={styles.contact_item}>
      <a className={styles.contact_link} href={href} target="_blank">
        <IconWrapper Icon={icon} />
        {title}
      </a>
    </Paragraph>
  );
}
