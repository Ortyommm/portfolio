import React from "react";
import ProjectCard from "./ProjectCard";
import * as cl from "./Projects.module.scss";
import { IProject, Languages } from "../../types";

export default ({
  projects,
  lang,
}: {
  projects: IProject[];
  lang: Languages;
}) => {
  const projectEls = projects.map((p) => {
    return (
      <ProjectCard
        key={p.href || p.git}
        src={p.src}
        alt={p.alt}
        git={p.git}
        href={p.href}
        description={p.description}
        lang={lang}
      />
    );
  });

  return <div className={cl.project_cards__container}>{projectEls}</div>;
};
