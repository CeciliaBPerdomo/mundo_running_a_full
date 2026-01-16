// models - server.ts
import express from "express"
import type { Express } from "express"
import cors from "cors"

// Conexion a la base de datos de mongo
import { dbConnection } from "../database/config.js"

// Rutas
import authRoutes from "../routes/auth.js"
import issuesRoutes from "../routes/issue.js"
import productRoutes from "../routes/productos.js"
import carritoRoutes from "../routes/carrito.js"

export class Server {
    app: Express
    port: string | number | undefined
    authPath: string
    issuesPath: string
    productsPath: string
    carritoPath: string

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.authPath = '/auth'
        this.issuesPath = "/issues"
        this.productsPath = "/products"
        this.carritoPath = "/carrito"


        // Conexión con la base de datos de mongo
        this.conectarDB()

        // Middlewares
        this.middlewares()

        // Rutas
        this.routes()
    }


    async conectarDB(): Promise<void> {
        await dbConnection()
    }

    middlewares(): void {
        this.app.use(express.json())
        this.app.use(cors()) //  → nadie se va a poder conectar si se se hace un deploy
    }

    routes(): void {
        this.app.use(this.authPath, authRoutes)
        this.app.use(this.issuesPath, issuesRoutes)
        this.app.use(this.productsPath, productRoutes)
        this.app.use(this.carritoPath, carritoRoutes)
    }

    listen(): void {
        this.app.listen(this.port, () => console.log(`Corriendo rápido en puerto: ${this.port}`))
    }
}