const express = require("express");

const {
    createOrgan,
    getAvailableOrgans,
} = require("../controllers/organController");

const router = express.Router();

router.post("/post-organ", createOrgan);

router.get("/available-organs", getAvailableOrgans);

module.exports = router;