export const resetPasswordTemplate = (
  nombre: string,
  resetUrl: string
): string => {
  return `
    <div style="font-family: Arial, sans-serif; background-color:#f4f4f4; padding: 20px;">
      <div style="max-width: 520px; margin: auto; background: #ffffff; padding: 25px; border-radius: 8px;">
        
        <h2 style="color:#e63946; text-align:center;">
          Mundo Running a Full 🔐
        </h2>

        <p style="font-size: 15px; color:#333;">
          Hola <strong>${nombre}</strong>,
        </p>

        <p style="font-size: 15px; color:#333;">
          Recibimos una solicitud para restablecer tu contraseña.
        </p>

        <p style="font-size: 15px; color:#333;">
          Hacé clic en el botón para continuar:
        </p>

        <div style="text-align:center; margin: 30px 0;">
          <a
            href="${resetUrl}"
            target="_blank"
            style="
              background-color:#e63946;
              color:#ffffff;
              padding: 12px 24px;
              border-radius: 6px;
              text-decoration:none;
              font-weight: bold;
              display:inline-block;
            "
          >
            Restablecer contraseña
          </a>
        </div>

        <p style="font-size: 13px; color:#777;">
          Este enlace es válido por tiempo limitado.  
          Si no solicitaste este cambio, podés ignorar este correo.
        </p>

        <hr style="border:none; border-top:1px solid #eee; margin:20px 0;" />

        <p style="font-size: 12px; color:#aaa; text-align:center;">
          © ${new Date().getFullYear()} Mundo Running a Full
        </p>
      </div>
    </div>
  `
}
