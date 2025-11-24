import React from "react";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import styles from "../../Projects.module.scss";
import { Dictionary } from "@/app/dictionaries/dictionaries";
import { WorkProject } from "@/app/[lang]/projects/types/WorkProject";

export function ProjectsList({
  projects,
  dict,
}: {
  projects: WorkProject[];
  dict: Dictionary;
}) {
  const projectEls = projects.map((p) => {
    return (
      <ProjectCard
        key={p.href || p.git}
        src={p.src}
        alt={p.alt}
        git={p.git}
        href={p.href}
        description={p.description}
        dict={dict}
      />
    );
  });

  return <div className={styles.project_cards__container}>{projectEls}</div>;
}
