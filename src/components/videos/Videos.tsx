import { useEffect, useState } from "react";
import youtube from "../../apis/youtube";
import Preloader from "../../components/Preloader/Preloader";
import YoutubeVideos from "./YoutubeVideos";
import Paragraph from "../../components/Typography/Paragraph";
import React from "react";
import Layout from "../../components/Layout";
import locales from "../../data/locales";
import { Languages } from "../../types";

export default function Videos({ lang }: { lang: Languages }) {
  const [videos, setVideos] = useState<[] | null>([]);
  const [loading, setLoading] = useState(false);

  const videosText = locales[lang].videos;

  useEffect(() => {
    setLoading(true);
    youtube("/", {
      params: {
        maxResults: 15,
      },
    }).then((res) => {
      const videoIds = res.data.items.map(
        (item: { id: { videoId: string } }) => item.id.videoId
      );

      setVideos(videoIds);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <Layout lang={lang}>
        <h1>{videosText.title}</h1>
        <Preloader />
      </Layout>
    );

  if (!loading && !videos?.length) {
    return (
      <Layout lang={lang}>
        <h1>{videosText.title}</h1>
        <Paragraph>{videosText.error}</Paragraph>
      </Layout>
    );
  }

  return (
    <Layout lang={lang}>
      <h1>{videosText.title}</h1>
      <YoutubeVideos videoIds={videos!} />
    </Layout>
  );
}
