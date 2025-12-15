import jwt from "jsonwebtoken"

export const generarJWT = (email: string = ""): Promise<string> => {
    return new Promise((res, rej) => {
        const payload = { email } // lo mejor es enviar el id

        jwt.sign(
            // payload // clave secreta // objt de config, callback de resolucion
            payload,
            process.env.CLAVE_SECRETA as string,
            { expiresIn: "4h" },
            (error: Error | null, token: string | undefined) => {
                if(error) {
                    console.error(error)
                    rej("No se pudo generar el JWT")
                } else {
                    res(token as string)
                }
            }
        )
    })
}

export const verifyUser = () => {}