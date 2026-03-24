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
import favoritoRoutes from "../routes/favoritos.js"
import mensajeRoutes from "../routes/mensaje.js"
import newsletterRoutes from "../routes/newsletter.js"

export class Server {
    app: Express
    port: string | number | undefined
    authPath: string
    issuesPath: string
    productsPath: string
    carritoPath: string
    favoritoPath: string
    mensajePath: string
    newsletterPath: string

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.authPath = '/auth'
        this.issuesPath = "/issues"
        this.productsPath = "/products"
        this.carritoPath = "/carrito"
        this.favoritoPath = "/favoritos"
        this.mensajePath = "/mensajes"
        this.newsletterPath = "/newsletter"

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
        this.app.use(this.favoritoPath, favoritoRoutes)
        this.app.use(this.mensajePath, mensajeRoutes)
        this.app.use(this.newsletterPath, newsletterRoutes)
    }

    listen(): void {
        this.app.listen(this.port, () => console.log(`Corriendo rápido en puerto: ${this.port}`))
    }
}
