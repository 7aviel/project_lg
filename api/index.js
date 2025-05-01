require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const autoRoutes = require("./routes/car");
const motoRoutes = require("./routes/motorcycle");
const wheelRobberyRoutes = require("./routes/wheelRobbery");
const brokenGlassRoutes = require("./routes/brokenGlass");
const carAccidentRoutes = require("./routes/carAccident");

const app = express();

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.use("/api/auto", autoRoutes);
app.use("/api/moto", motoRoutes);
app.use("/api/wheel-robbery", wheelRobberyRoutes);
app.use("/api/broken-glass", brokenGlassRoutes);
app.use("/api/car-accident", carAccidentRoutes);

app.get("/api/test", (req, res) => {
    res.json({ mensaje: "¡Backend funcionando en Vercel!" });
  });

  // Handle requests by serving index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});
  
module.exports = app;