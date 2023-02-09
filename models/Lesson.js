import mongoose from "mongoose"

// Création du schéma d'une leçon
const lessonSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, "Titre obligatoire"] },
        author: { type: String, required: [true, "Nom d'auteur obligatoire"] },
        discipline: { type: String, required: false },
        cycle: { type: String, required: false },
        description: { type: String, required: false },
        //  la date sera générée automatiquement à la création de la leçon par 
        date: { type: String, required: false },
        // les connaissances sont ajoutées sous forme d'un tableau d'objet qu'il est possible d'adapter en longueur pour chaque leçon
        knowledges : [{type : Object, required : false}],
        // prochaine fonctionnalité à intégrer dans la V2, l'ajout d'image en option pour illustrer une leçon voire pour chaque connaissance. Elles seront stockées dans un tableau.
        image: [{type: String, required: false}],
    },
    {
        timestamps: true
    }
)

export const Lesson = mongoose.model("lessons", lessonSchema)