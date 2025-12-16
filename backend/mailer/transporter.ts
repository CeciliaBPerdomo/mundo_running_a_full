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



// Configuración robusta para Render
export const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS
  },
  pool: true,
  maxConnections: 2,
  maxMessages: 50,
  connectionTimeout: 15000,
  socketTimeout: 15000
});

// Función para verificar SMTP que puedes llamar explícitamente
export const verifySMTPConnection = async () => {
  try {
    await transporter.verify();
    console.log(`✅ SMTP configurado correctamente en ${process.env.NODE_ENV} para:`, process.env.BREVO_USER);
    return true;
  } catch (error) {
    console.error('❌ Error SMTP en', process.env.NODE_ENV, ':', {
      error: error,
      usuario: process.env.BREVO_USER,
      claveDefinida: process.env.BREVO_PASS ? 'SÍ' : 'NO'
    });
    return false;
  }
};