import styles from "../../Skills.module.scss";
import React from "react";
import Image from "next/image";

export function Skill({ src, text }: { src: string; text: string }) {
  return (
    <div className={styles.skill}>
      <div className={styles.skill__img}>
        <Image src={src} alt={text} fill={true} />
      </div>
      <div className={styles.skill__text}>{text}</div>
    </div>
  );
}
