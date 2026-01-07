import { Schema, model, Model } from "mongoose";
import { CATEGORIAS } from "../helpers/constantes.js";

export interface IProducto {
    marca: string,
    descripcion: string,
    precio: number,
    categoria: string,
    foto: string,

    talles: string[],   // ["S", "M", "L", "XL"]
    colores: string[],  // ["negro", "azul", "rojo"]

    createdAt: Date,
    modifiedAt: Date,
    delete: boolean
}

const ProductoSchema = new Schema<IProducto>(
    {
        marca: { type: String, required: [true, "La marca es obligatoria"], trim: true },
        descripcion: { type: String, required: [true, "La descripción es obligatoria"], trim: true },
        precio: { type: Number, required: [true, "El precio es obligatorio"], min: [0, "El precio no puede ser negativo"] },
        categoria: { type: String, default: CATEGORIAS.ciclismo },
        foto: { type: String, required: [true, "La foto es obligatoria"] },
        talles: [{ type: String, required: true, trim: true }],
        colores: [{ type: String, required: true, trim: true }],
        // createdAt: { type: Date, default: Date.now }, 
        // modifiedAt: { type: Date, default: Date.now }, 
        delete: { type: Boolean, default: false }
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "modifiedAt" 
        }
    }
)

ProductoSchema.methods.toJSON = function () {
    const { __v, _id, ...producto } = this.toObject()
    return producto
}

const Producto: Model<IProducto> = model<IProducto>("producto", ProductoSchema)
export default Producto