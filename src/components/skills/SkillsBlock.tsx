import * as cl from "./Skills.module.scss";
import Paragraph from "../../components/Typography/Paragraph";
import React, { ReactNode } from "react";

export default function SkillsBlock({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className={cl.skills}>
      <h2>{title}</h2>
      {description ? <Paragraph>{description}</Paragraph> : null}
      <div className={cl.skills__wrapper}>{children}</div>
    </div>
  );
}
