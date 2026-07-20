const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const connectDB = require("./config/database");
const hospitalRoutes = require("./routes/hospitalRoutes");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/hospital", hospitalRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});


const organRoutes = require("./routes/organRoutes");
app.use("/api/organ", organRoutes);

const requestRoutes = require(
    "./routes/requestRoutes"
);

app.use(
    "/api/request",
    requestRoutes
);