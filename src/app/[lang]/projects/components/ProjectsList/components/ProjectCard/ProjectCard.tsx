"use client";
import styles from "../../../../Projects.module.scss";
import { MouseEvent, useRef } from "react";
import React from "react";
import { Dictionary } from "@/app/dictionaries/dictionaries";
import { WorkProject } from "@/app/[lang]/projects/types/WorkProject";
import Image from "next/image";

function onMouseMove(e: MouseEvent) {
  const halfWidth = (e.target as HTMLElement).offsetWidth / 2;
  const halfHeight = (e.target as HTMLElement).offsetHeight / 2;
  (e.target as HTMLElement).style.transform = `translateX(${
    (-halfWidth + e.nativeEvent.offsetX) / 10
  }px) scale(1.1) translateY(${(-halfHeight + e.nativeEvent.offsetY) / 10}px)`;
}

function onMouseOut(e: MouseEvent) {
  (e.target as HTMLElement).style.transform = "translate(0) scale(1)";
}

export function ProjectCard({
  src,
  alt,
  href,
  description,
  git,
  dict,
}: WorkProject & { dict: Dictionary }) {
  function revealInfo() {
    (info.current! as HTMLDivElement).style.transform = "translateY(-99%)";
  }

  function hideInfo() {
    (info.current! as HTMLDivElement).style.transform = "translateY(0)";
  }

  const info = useRef(null);
  const initialSrc = src;
  const projectsText = dict.projects;
  return (
    <div className={styles.project_card}>
      <div className={styles.project_card_image}>
        <div className={styles.project_card__content}>
          <div className={styles.image_wrapper}>
            <Image
              fill={true}
              onClick={revealInfo}
              onMouseMove={onMouseMove}
              onMouseOut={onMouseOut}
              src={initialSrc}
              alt={alt}
              className={`${styles.site_img}`}
            />
          </div>
          <div className={styles.project_card__info} ref={info}>
            <div className={styles.project_card__controls}>
              <div className={styles.small_icon_wrapper}>
                <Image
                  src={"/icons/close.svg"}
                  onClick={hideInfo}
                  alt={"close"}
                  fill={true}
                />
              </div>
            </div>
            {description ? (
              <div
                className={styles.description}
                // onClick={(e) => e.stopPropagation()}
              >
                {description}
              </div>
            ) : null}
            <div className={styles.project_links}>
              {href ? (
                <div className={styles.medium_icon_wrapper}>
                  <a href={href} target="_blank">
                    <Image
                      fill={true}
                      className={styles.redirect_btn}
                      src="/icons/redirect-btn.svg"
                      alt={projectsText.visit}
                      title={projectsText.visit}
                    />
                  </a>
                </div>
              ) : null}
              {git ? (
                <div className={styles.medium_icon_wrapper}>
                  <a href={git} className={styles.git_btn} target="_blank">
                    <Image
                      fill={true}
                      src="/icons/git-btn.svg"
                      alt={projectsText.github}
                      title={projectsText.github}
                    />
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.project_card_footer}>
        <p>{alt}</p>
      </div>
    </div>
  );
}
