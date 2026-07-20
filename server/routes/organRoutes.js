const express = require("express");

const { createOrgan } = require("../controllers/organController");

const router = express.Router();

router.post("/post-organ", createOrgan);

module.exports = router;