import { Icon, InlineIcon } from "@iconify/react";
import sharpModeEditOutline from "@iconify/icons-ic/sharp-mode-edit-outline";
import sharpWork from "@iconify/icons-ic/sharp-work";
import * as cl from "./Projects.module.scss";
import React, { useState } from "react";
import Paragraph from "../../components/Typography/Paragraph";
import Layout from "../../components/Layout";
import BottomLink from "../../components/BottomLink/BottomLink";
import ProjectsList from "./ProjectsList";
import { Languages } from "../../types";
import locales from "../../data/locales";
import { githubLink } from "../../config";

export default function Projects({ lang }: { lang: Languages }) {
  const projectsText = locales[lang].projects;

  const projects = [
    {
      src: "/images/other/me.png",
      alt: projectsText.thisSite.title,
      git: `${githubLink}/portfolio`,
      description: projectsText.thisSite.description,
    },
    {
      src: "/images/project-images/nest-url-shortener.png",
      alt: projectsText.urlShortener.title,
      git: "https://github.com/Ortyommm/nest-url-shortener",
      href: "https://artemdev.com/c/Us",
      description: (
        <>
          <p>{projectsText.urlShortener.description}</p>
          <p style={{ marginTop: "2px" }}>
            <a href="https://artemdev.com/c/Us">https://artemdev.com/c/Us</a>
          </p>
        </>
      ),
    },
    {
      src: "/images/project-images/localpass.png",
      alt: "LocalPass",
      git: `${githubLink}/LocalPass`,
      description: projectsText.localPass.description,
    },
    {
      src: "/images/project-images/onenilla.png",
      alt: projectsText.onenilla.title,
      git: "https://github.com/Ortyommm/onenilla",
      href: "https://onenilla.netlify.app",
      description: projectsText.onenilla.description,
    },
  ];

  return (
    <Layout lang={lang}>
      <div className={cl.projects}>
        <div className={cl.projects__description}>
          <div>
            <h1>{projectsText.title}</h1>
            <Paragraph>{projectsText.description}</Paragraph>
          </div>
          <div className={cl.icon_pencil}>
            <Icon icon={sharpModeEditOutline} />
          </div>
          <div className={cl.icon_suitcase}>
            <Icon icon={sharpWork} />
          </div>
        </div>
        <ProjectsList projects={projects} lang={lang} />
      </div>
      <BottomLink to="/contact" title={locales[lang].bottomLinks.contact} />
    </Layout>
  );
}
