const express = require("express");

const {

    createRequest,
    getMyRequests,

} = require("../controllers/requestController");


const router = express.Router();


router.post(
    "/create-request",
    createRequest
);
router.get(

"/my-requests/:hospitalId",

getMyRequests

);



module.exports = router;