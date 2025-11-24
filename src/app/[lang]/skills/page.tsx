import styles from "./Skills.module.scss";
import { Skill } from "./components/Skill/Skill";
import React from "react";
import { DefaultParams } from "@/types/globalTypes";
import { SkillsBlock } from "@/app/[lang]/skills/components/SkillsBlock/SkillsBlock";
import { BottomLink } from "@/app/[lang]/components/BottomLink/BottomLink";
import { getDictionary } from "@/app/dictionaries/dictionaries";
import { Heading } from "@/app/[lang]/components/Typography/Heading/Heading";
import { Paragraph } from "@/app/[lang]/components/Typography/Paragraph/Paragraph";

export default async function Page({ params }: { params: DefaultParams }) {
  const { lang } = await params;
  const dict = await getDictionary(lang); // en
  const skillsText = dict.skills;

  return (
    <>
      <div className={styles.skills__container}>
        <Heading type={"h1"} className={styles['skills__heading']}>{skillsText.title}</Heading>

        <SkillsBlock
          title="Frontend"
        >
          <Skill src="/icons/skills/JS.svg" text="JavaScript" />
          <Skill src="/icons/skills/TS.svg" text="TypeScript" />
          <Skill src="/icons/skills/Next.svg" text="Next" />
          <Skill src="/icons/skills/React.svg" text="React" />
          <Skill src="/icons/skills/Redux.svg" text="Redux" />
          <Skill src="/icons/skills/Vue.svg" text="Vue/Vuex" />
          <Skill src="/icons/skills/Electron.svg" text="Electron" />
          <Skill src="/icons/skills/CSS.svg" text="CSS/SCSS" />
          <Skill src="/icons/skills/HTML.svg" text="HTML" />
          <Skill src="/icons/skills/canvas.svg" text="Canvas" />
        </SkillsBlock>
        <SkillsBlock
          title="Backend"
        >
          <Skill src="/icons/skills/Node.svg" text="Node.js" />
          <Skill src="/icons/skills/Nest.svg" text="Nest.js" />
          <Skill src="/icons/skills/Python.svg" text="Python" />
          <Skill src="/icons/skills/Mongo.svg" text="MongoDB" />
          <Skill src="/icons/skills/Postgres.svg" text="PostgreSQL" />
        </SkillsBlock>
        <SkillsBlock title={'DevOps'}>
          <Skill src="/icons/skills/docker.svg" text="Docker" />
          <Skill src="/icons/skills/github.svg" text="Actions" />
          <Skill src="/icons/skills/gitlab.svg" text="CI/CD" />
          <Skill src="/icons/skills/ubuntu.svg" text="Ubuntu" />
        </SkillsBlock>

        {/*I almost forgot it*/}
        {/*<SkillsBlock title={skillsText.mobileDevelopment}>*/}
        {/*  <Skill src="/icons/skills/Flutter.svg" text="Flutter" />*/}
        {/*  <Skill src="/icons/skills/Dart.svg" text="Dart" />*/}
        {/*</SkillsBlock>*/}
      </div>
      <BottomLink
        to="/projects"
        title={dict.bottomLinks.projects}
        lang={lang}
      />
    </>
  );
}
