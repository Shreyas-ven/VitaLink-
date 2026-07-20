const Organ = require("../models/organModel");

const createOrgan = async (req, res) => {

    try {

        const {
            organName,
            bloodGroup,
            donorAge,
            donorGender,
            retrievalTime,
            expiryTime,
            hospitalId
        } = req.body;


        const organ = new Organ({

            organName,
            bloodGroup,
            donorAge,
            donorGender,
            retrievalTime,
            expiryTime,
            hospitalId

        });

        await organ.save();


        res.status(201).send({

            success: true,
            message: "Organ Posted Successfully"

        });

    } catch (error) {

        console.log(error);

        res.status(500).send({

            success: false,
            message: "Error while posting organ"

        });

    }

};

const getAvailableOrgans = async (req, res) => {

    try {

        const organs = await Organ.find({
    status: "Available",
}).populate(
    "hospitalId",
    "hospitalName address"
);

        res.status(200).send({

            success: true,
            organs,

        });

    } catch (error) {

        console.log(error);

        res.status(500).send({

            success: false,
            message: "Error while fetching organs",

        });

    }

};



module.exports = {
    createOrgan,
    getAvailableOrgans,
};