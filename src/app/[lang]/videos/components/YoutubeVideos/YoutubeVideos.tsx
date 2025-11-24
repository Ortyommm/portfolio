import React from "react";
import { YoutubePreview } from "@/app/[lang]/videos/components/YoutubeVideos/components/YoutubePreview/YoutubePreview";
import styles from "./YoutubeVideos.module.scss";

export function YoutubeVideos() {
  const videos = [
    {
      videoId: "96naNd2xbpA",
      title: "Worker threads. Многопоточность в Node.js, тесты.",
    },
    {
      videoId: "hSvqy8gqcoo",
      title: "Встроенные методы против алгоритмов и функций в JavaScript!",
    },
    {
      videoId: "86npYplqO5Q",
      title: "Криптография в Node js - Хеширование и шифрование",
    },
    { videoId: "msQY549PDI4", title: "Написал вирус на JavaScript!" },
    {
      videoId: "y4o7DUbR4P8",
      title: "Введение в SVG. #1 - Построение графика JavaScript",
    },
    { videoId: "eBKcoIzrdeQ", title: "Построение графика на JavaScript. #2" },
  ];
  const videoEls = [];
  for (const video of videos) {
    videoEls.push(<YoutubePreview key={video.videoId} {...video} />);
  }
  return <div className={styles.videos_wrapper}>{videoEls}</div>;
}
