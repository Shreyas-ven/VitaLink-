const mongoose = require("mongoose");

const organSchema = new mongoose.Schema({

    organName: {
        type: String,
        required: true,
    },

    bloodGroup: {
        type: String,
        required: true,
    },

    donorAge: {
        type: Number,
        required: true,
    },

    donorGender: {
        type: String,
        required: true,
    },

    retrievalTime: {
        type: Date,
        required: true,
    },

    expiryTime: {
        type: Date,
        required: true,
    },

    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true,
    },

    status: {
        type: String,
        default: "Available",
    },

}, { timestamps: true });

module.exports = mongoose.model("Organ", organSchema);