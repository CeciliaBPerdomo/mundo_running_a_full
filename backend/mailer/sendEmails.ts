import 'dotenv/config';
import { verificationCodeTemplate } from "./templates/verificationCode.template.js"

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export const sendEmail = async (to: string, code: string, nombre: string): Promise<void> => {
  const mailOptions = {
    from: '"Mundo Running a Full" <info@mundorunningafull.com>',
    to,
    subject: "Código de verificación de registro",
    text: `Tu código de verificación es: ${code}`,
    html: verificationCodeTemplate(code, nombre)
  }

  try {
    await resend.emails.send(mailOptions)
    console.log("Correo electrónico enviado ✔️")
  } catch (error) {
    console.error("⚠️ Error al enviar mail (no crítico): ", error)
  }
}
