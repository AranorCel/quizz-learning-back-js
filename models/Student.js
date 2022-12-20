import mongoose from "mongoose"

// Création du schéma d'un élève
const studentSchema = new mongoose.Schema(
    {
        firstname : { type: String, required: [true, "Prénom obligatoire"] },
        lastname : { type: String, required: [true, "Nom de famille obligatoire"] },
        level : { type: String, required: [true, "Classe obligatoire"] },
        //? grades recording must be scalable with next year
        grades : { type: Number, required: false },
    },
    {
        timestamps: true
    }
)

export const Student = mongoose.model("students", studentSchema)