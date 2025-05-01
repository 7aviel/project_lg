const { google } = require("googleapis");
const { Readable } = require("stream");
require('dotenv').config

const googleCredentialsJSON = Buffer.from(process.env.GOOGLE_CREDENTIALS_BASE64, 'base64').toString('utf-8');
const googleCredentials = JSON.parse(googleCredentialsJSON);

// Configuración de Google Drive
const auth = new google.auth.GoogleAuth({
  credentials: googleCredentials,
  scopes: ['https://www.googleapis.com/auth/drive']
});


const drive = google.drive({ version: "v3", auth });

// Función para subir un archivo a Google Drive
const uploadFileToDrive = async (file, folderId) => {
  const fileMetadata = {
    name: file.originalname,
    parents: [folderId], // ID de la carpeta en Google Drive
  };

  // Convertir el buffer en una stream usando Readable
  const bufferStream = new Readable();
  bufferStream.push(file.buffer);
  bufferStream.push(null);

  const media = {
    mimeType: file.mimetype,
    body: bufferStream,
  };

  const response = await drive.files.create({
    resource: fileMetadata,
    media,
    fields: "id",
  });

  // Hacer el archivo público
  await drive.permissions.create({
    fileId: response.data.id,
    requestBody: {
      role: "reader",
      type: "anyone",
    },
  });

  // Generar enlace público
  return `https://drive.google.com/uc?id=${response.data.id}`;
};

module.exports = { uploadFileToDrive };