const express = require("express");
const multer = require("multer");
const { uploadFileToDrive } = require("../services/googleDrive");
const { sendEmail } = require("../services/mailer");

const router = express.Router();

// Configuración de multer para manejar la carga de archivos en memoria
const upload = multer({ storage: multer.memoryStorage() });

router.post("/send-car-accident", upload.fields([
  { name: "fotoDeLicencia", maxCount: 2 },
  { name: "fotoDocumentacionOtro", maxCount: 5 },
  { name: "daniosFotos", maxCount: 5 },
  {name : "cedulaYSeguro", maxCount: 5}
]), async (req, res) => {
  const { fullName, company, email, phone, Provincia, Localidad, Calle, Fecha, dominio, detalles, mensaje, descripcionFotoDeLicencia, descripcionFotoDocumentacionOtro, descripcionDaniosFotos, descripcionCedulaYSeguro } = req.body;
  const files = req.files;
  const uploadedFiles = [];
  const folderId = "1-pxoHF8ni8eiPBxxZh_4G_9sFcxMSrcz";
  const subject = "Denuncia de accidente automovilístico";

  try {
    const descripciones = {
      fotoDeLicencia: descripcionFotoDeLicencia || "Sin descripción",
      fotoDocumentacionOtro: descripcionFotoDocumentacionOtro || "Sin descripción",
      daniosFotos: descripcionDaniosFotos || "Sin descripción",
      cedulaYSeguro: descripcionCedulaYSeguro || "Sin descripción"
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

    let emailText = `Denuncia de accidente automovilístico\n\n Nombre completo: ${fullName} \n Empresa del asegurado: ${company}\nCorreo: ${email}\nTeléfono: ${phone}\nProvincia: ${Provincia}\nLocalidad: ${Localidad}\nDirección: ${Calle}\nFecha del evento: ${Fecha}\nDominio del vehículo asegurado: ${dominio}\n\nDetalles:\n${detalles}\nRelato:\n${mensaje}\n\nEnlaces a evidencia:\n`;

    uploadedFiles.forEach((file, index) => {
      emailText += `${index + 1}. ${file.name} (${file.description}): ${file.url}\n`;
    });

    await sendEmail(emailText, subject);
    res.status(200).json({ success: true, message: "Denuncia enviada con éxito. Nos pondremos en contacto contigo pronto." });
  } catch (error) {
    console.error("Error al subir imágenes o enviar correo:", error);
    res.status(500).json({ message: "Error al procesar la denuncia", error: error.message });
  }
});

module.exports = router;