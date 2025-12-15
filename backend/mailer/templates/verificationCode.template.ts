export const verificationCodeTemplate = (code: string, nombre: string): string => {
  return `
    <div style="font-family: Arial, sans-serif; background-color:#f4f4f4; padding: 20px;">
      <div style="max-width: 520px; margin: auto; background: #ffffff; padding: 25px; border-radius: 8px;">
        
        <h2 style="color:#e63946; text-align:center;">
          Mundo Running a Full 🏃‍♀️🏃‍♂️
        </h2>

        <p style="font-size: 15px; color:#333; text-align:center;">
          ¡Gracias por registrarte <strong>${nombre}</strong>!
        </p>

        <p style="font-size: 15px; color:#333; text-align:center;">
          Usá el siguiente código para verificar tu cuenta:
        </p>

        <div style="font-size: 26px; font-weight: bold; text-align: center; letter-spacing: 4px; color: #e63946; margin: 20px 0;">
          ${code}
        </div>

        <p style="font-size: 13px; color:#777; text-align:center;">
          Este código es válido por tiempo limitado.
        </p>

        <hr style="border:none; border-top:1px solid #eee; margin:20px 0;" />

        <p style="font-size: 12px; color:#aaa; text-align:center;">
          © ${new Date().getFullYear()} Mundo Running a Full
        </p>
      </div>
    </div>
  `
}
