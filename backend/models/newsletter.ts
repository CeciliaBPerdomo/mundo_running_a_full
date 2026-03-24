import { model, Model, Schema } from "mongoose";

export interface INewsletter {
    email: string;
    createdAt: Date;
    modifiedAt: Date;
}

const NewsletterSchema = new Schema<INewsletter>(
    {
        email: {
            type: String,
            required: [true, "El email es obligatorio"],
            trim: true,
            unique: true
        }
    },
    {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "modifiedAt"
        }
    }
);

NewsletterSchema.methods.toJSON = function () {
    const { __v, ...newsletter } = this.toObject();
    return newsletter;
};

const Newsletter: Model<INewsletter> = model<INewsletter>("Newsletter", NewsletterSchema);
export default Newsletter;
