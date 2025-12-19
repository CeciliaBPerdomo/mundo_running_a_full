export const verificationCodeTemplate = (code: string, nombre: string): string => {
  const verifyUrl = `https://mundo-running-a-full.vercel.app/verify-code`

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

        <div style="text-align:center; margin: 30px 0;">
          <a 
            href="${verifyUrl}"
            style="
              background-color:#e63946;
              color:#ffffff;
              padding:12px 24px;
              border-radius:6px;
              text-decoration:none;
              font-weight:bold;
              display:inline-block;
            "
          >
            Verificar mi cuenta 🚀
          </a>
        </div>

        <p style="font-size: 13px; color:#777; text-align:center;">
          Este código es válido por tiempo limitado.
        </p>

         <p style="font-size: 12px; color:#777; text-align:center;">
          Si el botón no funciona, copiá y pegá este link en tu navegador:
          <br />
          <a href="${verifyUrl}" style="color:#e63946;">
            ${verifyUrl}
          </a>
        </p>

        <hr style="border:none; border-top:1px solid #eee; margin:20px 0;" />

        <p style="font-size: 12px; color:#aaa; text-align:center;">
          © ${new Date().getFullYear()} Mundo Running a Full
        </p>
      </div>
    </div>
  `
}
