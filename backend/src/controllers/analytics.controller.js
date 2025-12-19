const db = require("../db/db");

exports.getAnalytics = (req, res) => {
  const sql = `
    SELECT *
    FROM v_daily_metrics
    ORDER BY date ASC
  `;

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: "Failed to fetch analytics" });
    }
    res.json(rows);
  });
};
