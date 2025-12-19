const express = require("express");
const cors = require("cors");

const analyticsRoutes = require("./routes/analytics.routes");
const videosRoutes = require("./routes/videos.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/analytics", analyticsRoutes);
app.use("/api/videos", videosRoutes);

module.exports = app;
