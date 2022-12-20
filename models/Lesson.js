import mongoose from "mongoose"

// Création du schéma d'une leçon
const lessonSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, "Titre obligatoire"] },
        author: { type: String, required: [true, "Nom d'auteur obligatoire"] },
        discipline: { type: String, required: [true, "Discipline obligatoire"] },
        cycle: { type: String, required: [true, "Description succinte obligatoire"] },
        description: { type: String, required: [true, "Description succinte obligatoire"] },
        // l'image est optionnelle
        image: { type: String, required: false },
        //  la date sera générée automatiquement à la création de la leçon par 
        date: { type: Date, required: false },
    },
    {
        timestamps: true
    }
)

export const Lesson = mongoose.model("lessons", lessonSchema)