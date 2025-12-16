import nodemailer from "nodemailer"
import 'dotenv/config';

// export const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.GMAILEMAIL,
//     pass: process.env.GMAILPASS
//   },
//   from: 'cecilia.perdomo@gmail.com',

//   // CONFIGURACIÓN CRÍTICA PARA RENDER
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false, // true para 465, false para 587
//   requireTLS: true,
//   tls: { ciphers: 'SSLv3', rejectUnauthorized: false },
//   connectionTimeout: 10000,
//   greetingTimeout: 10000,
//   socketTimeout: 10000,
//   debug: true
// })

// transporter.verify((error, success) => {
//   if (error) {
//     console.error("Error en transporter:", error);
//   } else {
//     console.log("Transporter listo para enviar mails ✔️");
//   }
// });

export const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS
  }
});

// Función para probar la conexión inmediatamente
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Error de autenticación SMTP:", {
      error: error.message,
    //  code: error.code,
      usuario: process.env.BREVO_USER
    });
  } else {
    console.log("✅ SMTP configurado correctamente para:", process.env.BREVO_USER);
  }
});