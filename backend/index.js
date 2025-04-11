const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de multer para almacenar imágenes temporalmente
const upload = multer({ dest: "uploads/" });

// Endpoint para manejar datos e imágenes
app.post("/send-email", upload.fields([
  { name: "cedulaImage", maxCount: 2},
  { name: "dniImage", maxCount: 2 },
  { name: "vehicleImages", maxCount: 4 },
  { name: "gncTubeImage", maxCount: 2 },
  { name: "gncObleaImage", maxCount: 2 },
]), (req, res) => {
  const { email, phone, payment } = req.body; // Datos del formulario
  const files = req.files; // Imágenes subidas

  // Configuración del transportador de Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail", // Cambia según tu proveedor
    auth: {
      user: "vilcheariel1@gmail.com", // Correo de envío
      pass: "tgbd scmi ijxy yeec", // Contraseña del correo
    },
  });

  // Crear texto del correo con títulos
  let emailText = `Correo: ${email}\nTeléfono: ${phone}\nMedio de pago: ${payment}\n\n`;
  
  // Generar adjuntos y texto para cada grupo
  const attachments = [];
  if (files.cedulaImage) {
    emailText += "Imagen de cédula:\n";
    files.cedulaImage.forEach((file) => {
      emailText += `- ${file.originalname}\n`;
      attachments.push({ filename: file.originalname, path: file.path });
    });
  }
  if (files.dniImage) {
    emailText += "\nImagen de DNI:\n";
    files.dniImage.forEach((file) => {
      emailText += `- ${file.originalname}\n`;
      attachments.push({ filename: file.originalname, path: file.path });
    });
  }
  if (files.vehicleImages) {
    emailText += "\nFotos del vehículo:\n";
    files.vehicleImages.forEach((file) => {
      emailText += `- ${file.originalname}\n`;
      attachments.push({ filename: file.originalname, path: file.path });
    });
  }
  if (files.gncTubeImage) {
    emailText += "\nFoto del tubo de GNC:\n";
    files.gncTubeImage.forEach((file) => {
      emailText += `- ${file.originalname}\n`;
      attachments.push({ filename: file.originalname, path: file.path });
    });
  }
  if (files.gncObleaImage) {
    emailText += "\nFoto de la oblea del GNC:\n";
    files.gncObleaImage.forEach((file) => {
      emailText += `- ${file.originalname}\n`;
      attachments.push({ filename: file.originalname, path: file.path });
    });
  }

  // Detalles del correo
  const mailOptions = {
    from: `${email}`,
    to: "vilcheariel1@gmail.com", // Correo al que se enviará
    subject: "Solicitud de Alta de Auto",
    text: emailText, // Texto del correo con títulos y nombres de las imágenes
    attachments, // Adjuntar las imágenes
  };
  // Envío del correo
  transporter.sendMail(mailOptions, (error, info) => {
    // Elimina los archivos temporales
    attachments.forEach((file) => {
      fs.unlinkSync(file.path);
    });

    if (error) {
      console.error("Error al enviar el correo:", error);
      res.status(500).send("Hubo un error al enviar el correo.");
    } else {
      console.log("Correo enviado:", info.response);
      res.status(200).send("Correo enviado con éxito.");
    }
  });
});

// Inicializa el servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
