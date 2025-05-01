require("dotenv").config();
const express = require("express");
const cors = require("cors");

const autoRoutes = require("./routes/car");
const motoRoutes = require("./routes/motorcycle");
const wheelRobberyRoutes = require("./routes/wheelRobbery");
const brokenGlassRoutes = require("./routes/brokenGlass");
const carAccidentRoutes = require("./routes/carAccident");

const app = express();

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auto", autoRoutes);
app.use("/api/moto", motoRoutes);
app.use("/api/wheel-robbery", wheelRobberyRoutes);
app.use("/api/broken-glass", brokenGlassRoutes);
app.use("/api/car-accident", carAccidentRoutes);

module.exports = app;