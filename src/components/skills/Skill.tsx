import * as cl from "./Skills.module.scss";
import { ReactEventHandler, SyntheticEvent, useState } from "react";
import React from "react";

function replaceSrc(e: SyntheticEvent, src: string): void {
  (e.target as HTMLImageElement).src = src;
}

export default ({ src, text }: { src: string; text: string }) => {
  return (
    <div className={cl.skill}>
      <div className={cl.skill__img}>
        <img src={src} alt={text} placeholder="blur" />
      </div>
      <div className={cl.skill__text}>{text}</div>
    </div>
  );
};
