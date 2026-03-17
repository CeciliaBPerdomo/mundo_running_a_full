import { Schema, model, Model, Types } from "mongoose";

export interface IFavorito {
    usuarioId: Types.ObjectId;
    productoId: Types.ObjectId;

    createdAt: Date;
    modifiedAt: Date;
}

const FavoritoSchema = new Schema<IFavorito>(
    {
        usuarioId: {
            type: Schema.Types.ObjectId,
            ref: "usuario",
            required: [true, "El usuario es obligatorio"]
        },
        productoId: {
            type: Schema.Types.ObjectId,
            ref: "producto",
            required: [true, "El producto es obligatorio"]
        }
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "modifiedAt"
        }
    }
);

/**
 * 🔥 Evita favoritos duplicados
 * Un usuario solo puede tener un favorito por producto
 */
FavoritoSchema.index(
    { usuarioId: 1, productoId: 1 },
    { unique: true }
);

/**
 * Limpia la respuesta JSON
 */
FavoritoSchema.methods.toJSON = function () {
    const { __v, ...favorito } = this.toObject();
    return favorito;
};

const Favorito: Model<IFavorito> = model<IFavorito>(
    "favorito",
    FavoritoSchema
);

export default Favorito;