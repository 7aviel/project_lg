require('dotenv').config();
const express = require("express");
const cors = require("cors");
const autoRoutes = require("./routes/car");
const motoRoutes = require("./routes/motorcycle");
const wheelRobberyRoutes = require("./routes/wheelRobbery");
const brokenGlassRoutes = require("./routes/brokenGlass");
const carAccidentRoutes = require("./routes/carAccident");


const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Registrar rutas
app.use("/auto", autoRoutes);
app.use("/moto", motoRoutes);
app.use("/wheel-robbery", wheelRobberyRoutes);
app.use("/broken-glass", brokenGlassRoutes);
app.use("/car-accident", carAccidentRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});