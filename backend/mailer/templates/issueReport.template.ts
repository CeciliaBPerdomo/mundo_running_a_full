import type { IIssue } from "../../models/issue.js";

export const issueReportTemplate = (
  issue: IIssue,
  usuarioNombre: string,
  usuarioEmail: string
): string => {
  const prioridadTexto =
    issue.priority === 1
      ? "🟢 Baja"
      : issue.priority === 2
      ? "🟡 Media"
      : "🔴 Alta";

  return `
    <div style="font-family: Arial, sans-serif; background-color:#f4f4f4; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 25px; border-radius: 8px;">
        
        <h2 style="color:#e63946; text-align:center;">
          🚨 Nueva incidencia reportada
        </h2>

        <p style="font-size: 15px; color:#333;">
          <strong>Usuario:</strong> ${usuarioNombre} (${usuarioEmail})
        </p>

        <p style="font-size: 15px; color:#333;">
          <strong>Título:</strong> ${issue.title}
        </p>

        <p style="font-size: 15px; color:#333;">
          <strong>Descripción:</strong>
        </p>

        <div style="background:#f9f9f9; padding:15px; border-radius:6px; margin-bottom:15px;">
          ${issue.description}
        </div>

        <p style="font-size: 15px; color:#333;">
          <strong>Prioridad:</strong> ${prioridadTexto}
        </p>

        <p style="font-size: 13px; color:#777; margin-top:30px;">
          Fecha: ${new Date(issue.createdAt).toLocaleString()}
        </p>

        <hr style="border:none; border-top:1px solid #eee; margin:20px 0;" />

        <p style="font-size: 12px; color:#aaa; text-align:center;">
          Mundo Running a Full · Sistema de incidencias
        </p>
      </div>
    </div>
  `;
};
