import { Schema, Types, model } from "mongoose";
import type { Model } from "mongoose";

import { ESTADOS } from "../helpers/constantes.js";
import type { EstadoCarrito } from "../helpers/constantes.js";

export interface iCarritoItem {
    producto: Types.ObjectId;
    cantidad: number;
    precio: number; // 🔒 congelado al momento
}

export interface iEnvio {
    nombre: string;
    telefono: string;
    direccion: string;
    ciudad: string;
    departamento: string;
    codigoPostal?: string;
    notas?: string;
}


export interface iCarrito {
    user: Types.ObjectId;
    items: iCarritoItem[];

    createdAt: Date,
    modifiedAt: Date,
    deleted: boolean

    estado: EstadoCarrito,
    total: number,
    envio?: iEnvio;
}

const CarritoSchema = new Schema<iCarrito>(
    {
        user: {
            type: Types.ObjectId,
            ref: "UsuarioMR",
            required: true,
            index: true
        },

        items: [
            {
                producto: {
                    type: Types.ObjectId,
                    ref: "producto",
                    required: true
                },
                cantidad: {
                    type: Number,
                    required: true,
                    min: 1,
                    default: 1
                },
                precio: {
                    type: Number,
                    required: true,
                    min: 0
                }
            }
        ],

        estado: {
            type: String,
            enum: Object.values(ESTADOS),
            default: ESTADOS.activo
        },

        total: {
            type: Number,
            required: true,
            default: 0
        },

        envio: {
            nombre: String,
            telefono: String,
            direccion: String,
            ciudad: String,
            departamento: String,
            codigoPostal: String,
            notas: String
        },

        deleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "modifiedAt"
        }
    }
);


CarritoSchema.pre("save", function () {
    this.total = this.items.reduce(
        (acc: number, item: any) => acc + item.precio * item.cantidad, 0
    );
});

CarritoSchema.methods.toJSON = function () {
    const { __v, deleted, ...carrito } = this.toObject();
    return carrito;
};

const Carrito: Model<iCarrito> = model<iCarrito>("carritoMR", CarritoSchema);
export default Carrito;
