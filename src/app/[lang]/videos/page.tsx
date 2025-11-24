import { DefaultParams } from "@/types/globalTypes";
import { getDictionary } from "@/app/dictionaries/dictionaries";
import { YoutubeVideos } from "@/app/[lang]/videos/components/YoutubeVideos/YoutubeVideos";
import { Heading } from "@/app/[lang]/components/Typography/Heading/Heading";
import styles from "./page.module.scss";

export default async function Page({ params }: { params: DefaultParams }) {
  const { lang } = await params;

  const dict = await getDictionary(lang);
  const videosText = dict.videos;

  return (
    <div className={styles.root}>
      <Heading type={"h1"}>{videosText.title}</Heading>
      <YoutubeVideos />
    </div>
  );
}
