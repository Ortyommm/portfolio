import React from "react";
import * as style from "./YoutubeVideo.module.scss";

export default function YoutubeVideo({ videoId }: { videoId: string }) {
  return (
    <iframe
      className={style.video}
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
