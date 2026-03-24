import "dotenv/config";
import { Resend } from "resend";
import { contactMessageReceivedTemplate } from "./templates/contactMessageReceived.template.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMessageEmail = async (
  to: string,
  nombre: string,
  apellido: string
): Promise<void> => {
  try {
    await resend.emails.send({
      from: '"Mundo Running a Full" <info@mundorunningafull.com>',
      to,
      subject: "Recibimos tu mensaje",
      html: contactMessageReceivedTemplate(nombre, apellido),
    });

    console.log("Mail de confirmacion de mensaje enviado correctamente");
  } catch (error) {
    console.error("Error enviando mail de confirmacion de mensaje:", error);
  }
};
