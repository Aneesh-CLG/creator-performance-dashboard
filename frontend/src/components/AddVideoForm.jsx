import { useState } from "react";
import { createVideo } from "../services/api";

export default function AddVideoForm({ onSuccess }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [views, setViews] = useState("");
  const [likes, setLikes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const resetForm = () => {
    setTitle("");
    setDate("");
    setViews("");
    setLikes("");
  };

  const submit = async () => {
    if (!title || !date || !views || !likes) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const engagement =
        ((Number(likes) / Number(views)) * 100).toFixed(2);

      await createVideo({
        title,
        channel_title: "Manual Entry",
        published_at: date,
        view_count: Number(views),
        like_count: Number(likes),
        engagement_rate: engagement,
      });

      resetForm();
      onSuccess();
    } catch (err) {
      setError("Failed to add video");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card">
      <h3>Add New Video</h3>

      {error && <p className="error">{error}</p>}

      <input
        placeholder="Video Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        placeholder="Views"
        value={views}
        onChange={(e) => setViews(e.target.value)}
      />

      <input
        placeholder="Likes"
        value={likes}
        onChange={(e) => setLikes(e.target.value)}
      />

      <button onClick={submit} disabled={loading}>
        {loading ? "Adding..." : "Add Video"}
      </button>
    </div>
  );
}
