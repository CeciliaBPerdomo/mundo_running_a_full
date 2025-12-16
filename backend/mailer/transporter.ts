import nodemailer from "nodemailer"
import 'dotenv/config';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAILEMAIL,
    pass: process.env.GMAILPASS
  },
  tls: {
    rejectUnauthorized: false // Para desarrollo, en producción es false
  },
  from: 'cecilia.perdomo@gmail.com',

  secure: true, // Usa SSL
  requireTLS: true,

  // Opciones importantes para evitar timeouts
  connectionTimeout: 10000, // 10 segundos
  greetingTimeout: 10000,
  socketTimeout: 10000,
  pool: true, // Usar conexiones persistentes

  // Agrega más opciones de debugging
  debug: process.env.NODE_ENV !== 'production',
  logger: process.env.NODE_ENV !== 'production'
})

transporter.verify((error, success) => {
  if (error) {
    console.error("Error en transporter:", error);
  } else {
    console.log("Transporter listo para enviar mails ✔️");
  }
});