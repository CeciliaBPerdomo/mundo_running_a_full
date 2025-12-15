import nodemailer from "nodemailer"
import 'dotenv/config';

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAILEMAIL,
        pass: process.env.GMAILPASS
    },
    from: 'cecilia.perdomo@gmail.com'
})

transporter.verify((error, success) => {
  if (error) {
    console.error("Error en transporter:", error);
  } else {
    console.log("Transporter listo para enviar mails ✔️");
  }
});