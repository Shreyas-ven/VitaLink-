const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({

    // Organ being requested
    organId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organ",
        required: true,
    },

    // Hospital that posted the organ
    donorHospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },

    // Hospital requesting the organ
    requestingHospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },

    // Patient details
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

    // High / Medium / Low
    urgencyLevel: {
        type: String,
        required: true,
    },

    // Reason for transplant
    reason: {
        type: String,
        required: true,
    },

    // Pending / Accepted / Rejected
    status: {
        type: String,
        default: "Pending",
    },

    // Message from donor hospital
    message: {
        type: String,
        default: "",
    }

},
{
    timestamps: true,
});

module.exports = mongoose.model(
    "Request",
    requestSchema
);