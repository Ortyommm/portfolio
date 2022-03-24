import React, { SyntheticEvent, useRef } from "react";

import * as cl from "./About.module.scss";
import Paragraph from "../../components/Typography/Paragraph";
import Layout from "../../components/Layout";
import BottomLink from "../../components/BottomLink/BottomLink";
import { Languages } from "../../types";
import locales from "../../data/locales";

export default ({ lang }: { lang: Languages }) => {
  // function onImageLoad(e: SyntheticEvent) {
  //   (imgRef.current! as HTMLImageElement).style.opacity = "1";
  // }
  // const imgRef = useRef(null);
  const aboutText = locales[lang].about;

  return (
    <Layout lang={lang}>
      <div className={cl.about}>
        <div className={cl.text}>
          <h1>{aboutText.title}</h1>
          <Paragraph>{aboutText.name}.</Paragraph>
          <Paragraph>{aboutText.discipline}.</Paragraph>
          <Paragraph>
            {aboutText.computer}:
            <ul>
              <li>{aboutText.computerProblems}.</li>
              <li>{aboutText.computerBuilding}.</li>
              <li>{aboutText.computerKnowledge}.</li>
            </ul>
          </Paragraph>
          <Paragraph>{aboutText.otherSkills}.</Paragraph>
          <Paragraph>{aboutText.siteInfo}.</Paragraph>
          <BottomLink to="/skills" title={locales[lang].bottomLinks.skills} />
        </div>

        <div className={`${cl.image_right} ${cl.fact}`}>
          <img src="/images/other/me.png" alt="logo" />
        </div>
      </div>
    </Layout>
  );
};
