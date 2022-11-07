import mongoose,{Schema} from "mongoose";

const colorSchema = new Schema({

    nombreColor: {
        type: String,
        required: true,
        unique: true
    }
})

export const Color = mongoose.model("color", colorSchema)