export const contactMessageReceivedTemplate = (
  nombre: string,
  apellido: string
): string => {
  return `
    <div style="font-family: Arial, sans-serif; background-color:#f4f4f4; padding: 20px;">
      <div style="max-width: 520px; margin: auto; background: #ffffff; padding: 25px; border-radius: 8px;">
        <h2 style="color:#e63946; text-align:center;">
          Mundo Running a Full
        </h2>

        <p style="font-size: 15px; color:#333;">
          Hola <strong>${nombre} ${apellido}</strong>,
        </p>

        <p style="font-size: 15px; color:#333;">
          Gracias por tu mensaje, nos pondremos en contacto contigo a la brevedad.
        </p>

        <p style="font-size: 15px; color:#333;">
          Saludos,
          <br />
          El equipo de Mundo Running a Full
        </p>

        <hr style="border:none; border-top:1px solid #eee; margin:20px 0;" />

        <p style="font-size: 12px; color:#aaa; text-align:center;">
          © ${new Date().getFullYear()} Mundo Running a Full
        </p>
      </div>
    </div>
  `;
};
