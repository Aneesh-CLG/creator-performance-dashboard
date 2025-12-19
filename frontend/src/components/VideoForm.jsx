import { useState } from "react";
import { updateVideo } from "../services/api";

export default function VideoForm() {
  const [id, setId] = useState("");
  const [views, setViews] = useState("");
  const [likes, setLikes] = useState("");

  const submit = async () => {
    if (!id || !views || !likes) {
      alert("All fields required");
      return;
    }

    await updateVideo(id, {
      view_count: Number(views),
      like_count: Number(likes),
      engagement_rate: ((likes / views) * 100).toFixed(2),
    });

    alert("Updated successfully");
  };

  return (
    <div>
      <h3>Update Video Metrics</h3>
      <input placeholder="Video ID" onChange={(e) => setId(e.target.value)} />
      <input placeholder="Views" onChange={(e) => setViews(e.target.value)} />
      <input placeholder="Likes" onChange={(e) => setLikes(e.target.value)} />
      <button onClick={submit}>Update</button>
    </div>
  );
}
