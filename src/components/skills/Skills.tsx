import * as cl from "./Skills.module.scss";
import Skill from "./Skill";
import { Icon, InlineIcon } from "@iconify/react";
import baselineArrowForward from "@iconify/icons-ic/baseline-arrow-forward";
import React, { useState } from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";
import Paragraph from "../../components/Typography/Paragraph";
import BottomLink from "../../components/BottomLink/BottomLink";
import SkillsBlock from "./SkillsBlock";
import { Languages } from "../../types";
import locales from "../../data/locales";

export default ({ lang }: { lang: Languages }) => {
  const skillsText = locales[lang].skills;

  return (
    <Layout lang={lang}>
      <div className={cl.skills__container}>
        <SkillsBlock
          title="Frontend"
          description={skillsText.frontendDescription}
        >
          <Skill src="/images/icons/JS.svg" text="JavaScript" />
          <Skill src="/images/icons/TS.svg" text="TypeScript" />
          <Skill src="/images/icons/React.svg" text="React" />
          <Skill src="/images/icons/Redux.svg" text="Redux" />
          <Skill src="/images/icons/Vue.svg" text="Vue/Vuex" />
          <Skill src="/images/icons/Electron.svg" text="Electron" />
          <Skill src="/images/icons/CSS.svg" text="CSS/SCSS" />
          <Skill src="/images/icons/HTML.svg" text="HTML" />
        </SkillsBlock>
        <SkillsBlock
          title="Backend"
          description={skillsText.backendDescription}
        >
          <Skill src="/images/icons/Node.svg" text="Node.js" />
          <Skill src="/images/icons/Nest.svg" text="Nest.js" />
          <Skill src="/images/icons/Mongo.svg" text="MongoDB" />
        </SkillsBlock>
        <SkillsBlock title={skillsText.mobileDevelopment}>
          <Skill src="/images/icons/Flutter.svg" text="Flutter" />
          <Skill src="/images/icons/Dart.svg" text="Dart" />
        </SkillsBlock>
        <SkillsBlock title={skillsText.software}>
          <Skill src="/images/icons/Webstorm.svg" text="WebStorm" />
          <Skill src="/images/icons/Figma.svg" text="Figma" />
          <Skill src="/images/icons/Windows.svg" text="Windows" />
        </SkillsBlock>
      </div>
      <BottomLink to="/projects" title={locales[lang].bottomLinks.projects} />
    </Layout>
  );
};
