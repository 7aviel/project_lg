const express = require("express");
const multer = require("multer");
const { uploadFileToDrive } = require("../services/googleDrive");
const { sendEmail } = require("../services/mailer");

const router = express.Router();

// Configuración de multer para manejar la carga de archivos en memoria
const upload = multer({ storage: multer.memoryStorage() });

router.post("/send-wheel-robbery", upload.fields([
  { name: "denunciaPolicial", maxCount: 5 },
]), async (req, res) => {
  const { email, phone, Calle, Localidad, Fecha, Rueda, descripcionDenunciaPolicial} = req.body;
  const files = req.files;
  const uploadedFiles = [];
  const folderId = "1yiIZy2e2rg_U-GI7MNNXveEpaJqO1sGV"; // Reemplaza con tu carpeta en Google Drive

  try {
    //Subir descripciones
    const descripciones = {
      denunciaPolicial: descripcionDenunciaPolicial || "Sin descripción"
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
    let emailText = `Denuncia de robo de rueda\n\nCorreo: ${email}\nTeléfono: ${phone}\nCalle y altura: ${Calle}, Localidad: ${Localidad}\nFecha del evento: ${Fecha}\nRueda robada: ${Rueda}\n\nEnlace(s) a denuncia policial:\n\n`;

    uploadedFiles.forEach((file, index) => {
      emailText += `${index + 1}. ${file.name} (${file.description}): ${file.url}\n`;
    });

    // Enviar correo electrónico
    await sendEmail(emailText, "Denuncia de robo de rueda");
    res.status(200).json({ success: true, message: "Denuncia enviada con éxito. Nos pondremos en contacto contigo pronto" });
  } catch (error) {
    console.error("Error al subir imágenes o enviar correo:", error);
    res.status(500).json({ message: "Error al procesar la denuncia", error: error.message });
  }
});

module.exports = router;