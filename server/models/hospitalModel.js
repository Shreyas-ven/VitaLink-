const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema(
{
    hospitalId: {
        type: String,
        unique: true,
    },

    hospitalName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        default: "hospital",
    },
},
{
    timestamps: true,
});

module.exports = mongoose.model("Hospital", hospitalSchema);