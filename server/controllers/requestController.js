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


module.exports = {

    createRequest,

};