const express = require("express");

const {

    createRequest

} = require("../controllers/requestController");


const router = express.Router();


router.post(
    "/create-request",
    createRequest
);


module.exports = router;