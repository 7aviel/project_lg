const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (emailText, subject) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.mailersend.net",
    port: 2525,
    secure: false,
    auth: {
      user: process.env.MAILSEND_USER,
      pass: process.env.MAILSEND_PASSWORD
    }
  });

  const mailOptions = {
    from: '"Gestoría & Seguros" <' + process.env.MAILSEND_USER + '>',
    to: "luigiampietri@lg-gestoriayseguros.com",
    subject: subject,
    text: emailText
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };