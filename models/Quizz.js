import mongoose from "mongoose"

// Création du schéma d'un quizz
const quizzSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, "Titre obligatoire"] },
        author: { type: String, required: [true, "Nom d'auteur obligatoire"] },
        discipline: { type: String, required: false },
        cycle: { type: String, required: false },
        description: { type: String, required: false },
        // l'image est optionnelle
        image: { type: String, required: false },
        //  la date sera générée automatiquement à la création de la leçon par 
        date: { type: String, required: false },
    },
    {
        timestamps: true
    }
)

export const Quizz = mongoose.model("quizz", quizzSchema)