const express = require("express");
const multer = require("multer");
const { uploadFileToDrive } = require("../services/googleDrive");
const { sendEmail } = require("../services/mailer");

const router = express.Router();

// Configuración de multer para manejar la carga de archivos en memoria
const upload = multer({ storage: multer.memoryStorage() });

router.post("/send-broken-glass", upload.fields([
  { name: "cristalRoto", maxCount: 5 }, // Fotos del cristal dañado
]), async (req, res) => {
  const { fullName, company, email, phone, Calle, Localidad, Fecha, Rueda, descripcionCristalRoto } = req.body;
  const files = req.files;
  const uploadedFiles = [];
  const folderId = "1OEu8dZIYUJMOVTYYnq8YkVIYSQIbfFux"; // Reemplaza con tu carpeta en Google Drive

  try {
    //subir descripcion
    const descripciones = {
      cristalRoto: descripcionCristalRoto || "Sin descripción"
    };


    // Subir cada imagen a Google Drive
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
    // Crear texto del correo con los enlaces de la denuncia
    let emailText = `Denuncia de cristal roto\n\n Nombre completo: ${fullName} \n Empresa del asegurado: ${company}\nCorreo: ${email}\nTeléfono: ${phone}\nDirección: ${Calle}, ${Localidad}\nFecha del evento: ${Fecha}\nCristal afectado: ${Rueda}\n\nEnlace(s) a evidencia fotográfica:\n\n`;

    uploadedFiles.forEach((file, index) => {
      emailText += `${index + 1}. ${file.name} (${file.description}): ${file.url}\n`;
    });

    // Enviar correo electrónico
    await sendEmail(emailText, "Denuncia de cristal roto");
    res.status(200).json({ success: true, message: "Denuncia enviada con éxito. Nos pondremos en contacto contigo pronto" });
  } catch (error) {
    console.error("Error al subir imágenes o enviar correo:", error);
    res.status(500).json({ message: "Error al procesar la denuncia", error: error.message });
  }
});

module.exports = router;