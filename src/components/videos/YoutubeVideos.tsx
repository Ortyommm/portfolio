import React from "react";
import YoutubeVideo from "./YoutubeVideo";

export default function YoutubeVideos({
  videoIds = [],
}: {
  videoIds: string[];
}) {
  const videoEls = [];
  for (const videoId of videoIds) {
    videoEls.push(<YoutubeVideo key={videoId} videoId={videoId} />);
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{videoEls}</div>
  );
}
