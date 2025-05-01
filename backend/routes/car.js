const express = require("express");
const multer = require("multer");
const { uploadFileToDrive } = require("../services/googleDrive");
const { sendEmail } = require("../services/mailer");

const router = express.Router();

// Configuración de multer para manejar la carga de archivos en memoria
const upload = multer({ storage: multer.memoryStorage() });

router.post("/send-auto", upload.fields([
  { name: "cedulaImage", maxCount: 2 },
  { name: "dniImage", maxCount: 2 },
  { name: "vehicleImages", maxCount: 5 },
  { name: "gncTubeImage", maxCount: 2 },
  { name: "gncObleaImage", maxCount: 2 },
]), async (req, res) => {
  const { email, phone, payment, cedulaDescription, idDescription, vehicleDescription, gncTubeDescription, gncObleaDescription } = req.body;
  const files = req.files;
  const uploadedFiles = [];
  const folderId = "14IrMbLdkLzkw4S07QFSpOS1cuRsV-wSg"; // Reemplaza con tu carpeta de Drive
  const subject = "Solicitud de alta de auto"

  try {
      //subir descripciones
      const descripciones = {
        cedulaImage: cedulaDescription || "Sin descripción",
        dniImage: idDescription || "Sin descripción",
        vehicleImages: vehicleDescription || "Sin descripción",
        gncTubeImage: gncTubeDescription || "Sin descripción",
        gncObleaImage: gncObleaDescription || "Sin descripción"
      };

      for (const fieldName in files) {
        for (const file of files[fieldName]) {
          const link = await uploadFileToDrive(file, folderId);
          uploadedFiles.push({
            name: file.originalname,
            url: link,
            description: descripciones[fieldName] || "Sin descripción"
          });
        }
      }

    let emailText = `Correo: ${email}\nTeléfono: ${phone}\nMedio de pago: ${payment}\n\nEnlaces de las imágenes:\n\n`;
    uploadedFiles.forEach((file, index) => {
      emailText += `${index + 1}. ${file.name} (${file.description}): ${file.url}\n`;
    });

    await sendEmail(emailText, subject);
    res.status(200).json({ success: true, message: "Correo enviado con éxito." });
  } catch (error) {
    console.error("Error al subir imágenes o enviar correo:", error);
    res.status(500).json({ message: "Error al subir imágenes o enviar correo", error: error.message });
  }
});

module.exports = router;