const API_BASE = "http://localhost:5000/api";

export const fetchAnalytics = async () => {
  const res = await fetch(`${API_BASE}/analytics`);
  if (!res.ok) throw new Error("Failed to load analytics");
  return res.json();
};

export const updateVideo = async (id, payload) => {
  const res = await fetch(`${API_BASE}/videos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to update video");
  return res.json();
};
export const createVideo = async (payload) => {
  const res = await fetch("http://localhost:5000/api/videos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Failed to create video");
  return res.json();
};
