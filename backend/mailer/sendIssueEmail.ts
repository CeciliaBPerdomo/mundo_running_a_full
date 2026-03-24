import "dotenv/config";
import { Resend } from "resend";
import type { IIssue } from "../models/issue.js";
import { issueReportTemplate } from "./templates/issueReport.template.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendIssueEmail = async (
  issue: IIssue,
  usuarioNombre: string,
  usuarioEmail: string
): Promise<void> => {
  try {
    await resend.emails.send({
      from: '"Mundo Running a Full" <info@mundorunningafull.com>',
      to: "cecilia.perdomo@gmail.com",
      subject: `🚨 Nueva incidencia: ${issue.title}`,
      html: issueReportTemplate(issue, usuarioNombre, usuarioEmail),
    });

    console.log("📩 Mail de incidencia enviado correctamente");
  } catch (error) {
    console.error("⚠️ Error enviando mail de incidencia:", error);
  }
};
