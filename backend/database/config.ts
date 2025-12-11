// database -> config.ts

import mongoose from "mongoose"

export const dbConnection = async (): Promise<void> => {
    try {
        const uri = process.env.MONGO_URI as string;

        if (!uri) {
            throw new Error("No existe MONGO_URI en el .env");
        }

        await mongoose.connect(uri);
        console.log("Base de datos online")
        
    } catch (error) {
        console.error(error)
        throw new Error("Error en la conexión de la base de datos")
    }
}