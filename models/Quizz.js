import mongoose from "mongoose"

// Création du schéma d'un quizz
const quizzSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, "Titre obligatoire"] },
        author: { type: String, required: [true, "Nom d'auteur obligatoire"] },
        discipline: { type: String, required: false },
        cycle: { type: String, required: false },
        description: { type: String, required: false },
        //  la date sera générée automatiquement à la création de la leçon par 
        date: { type: String, required: false },
        // Les questions du quizz sont regroupées dans un tableau d'objet qui comprend la question, les options (choices) et les réponses (chek) dans un format booléen. Il faudra adapter ce format au moment du quizz pour ajouter les choix (chosen) avant soumission.
        tests : [{type : Object, required : false}],
        // prochaine fonctionnalité à intégrer dans la V2, l'ajout d'image en option pour illustrer une leçon voire pour chaque connaissance. Elles seront stockées dans un tableau.
        image: [{type: String, required: false}],
    },
    {
        timestamps: true
    }
)

export const Quizz = mongoose.model("quizz", quizzSchema)