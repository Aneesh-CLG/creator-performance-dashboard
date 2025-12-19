const db = require("../db/db");

exports.createVideo = (req, res) => {
  const { title, channel_title, published_at, view_count, like_count, engagement_rate } = req.body;

  if (!title || !published_at || view_count == null || like_count == null) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const sql = `
    INSERT INTO videos (title, channel_title, published_at, view_count, like_count, engagement_rate)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.run(
    sql,
    [title, channel_title, published_at, view_count, like_count, engagement_rate],
    function (err) {
      if (err) {
        return res.status(500).json({ error: "Failed to create video" });
      }
      res.status(201).json({ id: this.lastID });
    }
  );
};
exports.updateVideo = (req, res) => {
  const { id } = req.params;
  const { view_count, like_count, engagement_rate } = req.body;

  if (view_count == null || like_count == null) {
    return res.status(400).json({ error: "Missing fields to update" });
  }

  const sql = `
    UPDATE videos
    SET view_count = ?, like_count = ?, engagement_rate = ?
    WHERE rowid = ?
  `;

  db.run(sql, [view_count, like_count, engagement_rate, id], function (err) {
    if (err) {
      return res.status(500).json({ error: "Failed to update video" });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: "Video not found" });
    }
    res.json({ message: "Video updated successfully" });
  });
};
