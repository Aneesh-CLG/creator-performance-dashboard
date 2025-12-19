const express = require("express");
const router = express.Router();
const {
  createVideo,
  updateVideo
} = require("../controllers/videos.controller");

router.post("/", createVideo);
router.put("/:id", updateVideo);

module.exports = router;
