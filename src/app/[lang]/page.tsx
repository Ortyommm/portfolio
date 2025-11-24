import { getDictionary } from "../dictionaries/dictionaries";
import { Paragraph } from "@/app/[lang]/components/Typography/Paragraph/Paragraph";
import { BottomLink } from "@/app/[lang]/components/BottomLink/BottomLink";
import styles from "./page.module.scss";
import { DefaultParams } from "@/types/globalTypes";
import Image from "next/image";
import MeImage from "@image/other/me.png";
import { Heading } from "@/app/[lang]/components/Typography/Heading/Heading";
import { ParagraphHTML } from "@/app/[lang]/components/Typography/ParagraphHTML/ParagraphHTML";

export default async function Page({ params }: { params: DefaultParams }) {
  const { lang } = await params;
  const dict = await getDictionary(lang); // en
  const aboutText = dict.about;

  return (
    <div className={styles.about}>
      <div className={styles.about}>
        <div className={styles.text}>
          <Heading>{aboutText.title}</Heading>
          <ParagraphHTML>{aboutText.name}</ParagraphHTML>
          <ParagraphHTML>{aboutText.shortInfo}</ParagraphHTML>
          <ParagraphHTML>{aboutText.currentInfo}</ParagraphHTML>
          <Paragraph>{aboutText.endInfo}</Paragraph>
          <BottomLink
            to="/skills"
            title={dict.bottomLinks.skills}
            lang={lang}
          />
        </div>
        <div className={`${styles.image_right} ${styles.fact}`}>
          <Image objectFit={"cover"} src={MeImage} alt="logo" />
        </div>
      </div>
    </div>
  );
}
