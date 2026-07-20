const Hospital = require("../models/hospitalModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerHospital = async (req, res) => {
    try {

        const { hospitalName, email, password, phone, address } = req.body;


        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new hospital
        const hospital = new Hospital({
            hospitalName,
            email,
            password: hashedPassword,
            phone,
            address,
        });

        await hospital.save();

        res.status(201).send({
            success: true,
            message: "Hospital registered successfully",
        });

    } catch (error) {

        console.log(error);

        res.status(500).send({
            success: false,
            message: "Error while registering hospital",
        });
    }
};


const loginHospital = async (req, res) => {

    try {

        const { email, password } = req.body;

        // Find hospital by email
        const hospital = await Hospital.findOne({ email });

        if (!hospital) {
            return res.status(404).send({
                success: false,
                message: "Hospital not found",
            });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(
            password,
            hospital.password
        );

        if (!isMatch) {
            return res.status(401).send({
                success: false,
                message: "Invalid password",
            });
        }

        // Generate JWT Token
        const token = jwt.sign(
    {
        id: hospital._id,
        hospitalName: hospital.hospitalName,
        email: hospital.email
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
);

        res.status(200).send({
            success: true,
            message: "Login successful",
            token,
            hospitalId: hospital._id,
        });


    } catch (error) {

        console.log(error);

        res.status(500).send({
            success: false,
            message: "Error while logging in",
        });
    }
};


module.exports = {
    registerHospital,
    loginHospital,
};