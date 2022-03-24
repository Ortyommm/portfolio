import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    key: process.env.YOUTUBE_API_KEY,
    channelId: "UCjS1JNPaXF0GPHCUfkaW31g",
    type: "video",
  },
});
