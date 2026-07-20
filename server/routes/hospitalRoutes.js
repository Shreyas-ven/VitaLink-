const express = require("express");

const {
    registerHospital,
    loginHospital
} = require("../controllers/hospitalController");

const router = express.Router();

const {

    createOrgan,
    getAvailableOrgans,

} = require("../controllers/organController");


router.post("/register", registerHospital);
router.post("/login", loginHospital);

router.post("/post-organ", createOrgan);
router.get("/available-organs", getAvailableOrgans);



module.exports = router;