const Request = require("../models/requestModel");


const createRequest = async (req, res) => {

    try {

        const request = new Request(req.body);

        await request.save();

        res.status(201).send({

            success: true,
            message: "Organ Request Sent Successfully"

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).send({

            success: false,
            message: "Error while sending request"

        });

    }

};



const getMyRequests = async (req, res) => {

    try {

        const hospitalId = req.params.hospitalId;

        const requests = await Request.find({

            requestingHospitalId: hospitalId,

        })

        .populate("organId", "organName bloodGroup")

        .populate("donorHospitalId",
            "hospitalName address");



        res.status(200).send({

            success: true,
            requests,

        });

    }

    catch (error) {

        console.log(error);

        res.status(500).send({

            success: false,
            message: "Error while fetching requests",

        });

    }

};







module.exports = {

    createRequest,
    getMyRequests,

};