import mongoose from "mongoose"

// Création du schéma d'un professeur
const teacherSchema = new mongoose.Schema(
    {
        email: { type: String, required: [true, "Email obligatoire"] },
        password: { type: String, required: [true, "Mot de passe obligatoire"], minlength: 8 },
        firstname: { type: String, required: [true, "Prénom obligatoire"] },
        lastname: { type: String, required: [true, "Nom de famille obligatoire"] },
    },
    {
        timestamps: true
    }
)

export const Teacher = mongoose.model("teachers", teacherSchema)