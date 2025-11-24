import ArrowForward from "@image/icons/arrow-forward.svg";
import React from "react";
import { IconWrapper } from "@/app/[lang]/components/IconWrapper/IconWrapper";
import styles from "./BottomLink.module.scss";
import { StyledLink } from "@/app/[lang]/components/StyledLink/StyledLink";
import { SupportedLanguages } from "@/types/globalTypes";

export function BottomLink({
  to,
  title,
  lang,
}: {
  to: string;
  title: string;
  lang: SupportedLanguages;
}) {
  const link = lang === "en" ? `/en/${to.replace(/\//g, "")}` : to;
  return (
    <div className={styles.root}>
      <StyledLink href={link} className={styles.bottom_link}>
        <span>{title}</span>
        <IconWrapper Icon={ArrowForward} />
      </StyledLink>
    </div>
  );
}
