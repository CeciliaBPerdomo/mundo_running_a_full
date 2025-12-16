import { transporter } from "./transporter.js"
import { verificationCodeTemplate } from "./templates/verificationCode.template.js"

export const sendEmail = async (to: string, code: string, nombre: string): Promise<void> => {
  const mailOptions = {
    from: '"Mundo Running a Full" <cecilia.perdomo@gmail.com>',
    to,
    subject: "Código de verificación de registro",
    text: `Tu código de verificación es: ${code}`,
    html: verificationCodeTemplate(code, nombre)
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log("Correo electrónico enviado ✔️")
  } catch (error) {
    console.error("Error al envío del correo:", error)
    throw new Error ("Error al envío del correo");
  }
}
