import { ReactElement } from "react";
import styles from "./YoutubePreview.module.scss";
import Image from "next/image";
import { VideoTitle } from "@/app/[lang]/videos/components/YoutubeVideos/components/YoutubePreview/VideoTitle/VideoTitle";
import PlayButtonIcon from "@image/icons/play-btn.svg";
import { IconWrapper } from "@/app/[lang]/components/IconWrapper/IconWrapper";

interface Props {
  videoId: string;
  title: string;
}

export function YoutubePreview({ videoId, title }: Props): ReactElement {
  return (
    <div className={styles.root}>
      <a href={`https://youtu.be/${videoId}`} target={"_blank"}>
        <VideoTitle>{title}</VideoTitle>
        <Image src={`/youtube/${videoId}.png`} alt={title} fill={true} />
        <IconWrapper
          Icon={PlayButtonIcon}
          wrapperClassName={styles.play_button}
        />
        <div className={styles.watch_on_youtube}>Смотреть на YouTube</div>
      </a>
    </div>
  );
}
