import mongoose from "mongoose"

// Création du schéma d'une leçon
const lessonSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, "Titre obligatoire"] },
        author: { type: String, required: [true, "Nom d'auteur obligatoire"] },
        // l'image est optionnelle
        image: { type: String, required: [false] },
        //  la date sera générée automatiquement
        date: { type: Date, required: [false] },
        description: { type: String, required: [true, "Description succinte obligatoire"] },
        cycle: { type: String, required: [true, "Description succinte obligatoire"] },
        discipline: { type: String, required: [true, "Discipline obligatoire"] },
    },
    {
        timestamps: true
    }
)

export const Lesson = mongoose.model("Lessons", lessonSchema)