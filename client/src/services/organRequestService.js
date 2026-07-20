const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema(

    {

        organId: {

            type: mongoose.Schema.Types.ObjectId,
            ref: "Organ",
            required: true,

        },

        donorHospitalId: {

            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
            required: true,

        },

        requestingHospitalId: {

            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
            required: true,

        },

        patientName: {

            type: String,
            required: true,

        },

        patientAge: {

            type: Number,
            required: true,

        },

        bloodGroup: {

            type: String,
            required: true,

        },

        urgencyLevel: {

            type: String,
            required: true,

        },

        reason: {

            type: String,
            required: true,

        },

        status: {

            type: String,
            default: "Pending",

        },

        message: {

            type: String,
            default: "",

        }

    },

    {

        timestamps: true,

    }

);

module.exports = mongoose.model(
    "Request",
    requestSchema
);