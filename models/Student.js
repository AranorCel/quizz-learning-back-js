import mongoose from "mongoose"

// Création du schéma d'un élève à implanter dans la V2. Limites RGPD. Possibilité de créer des listes d'élèves à partir d'un login et d'un mot de passe généré aléatoirement avec envoi d'un lien. Pour cette V1, l'ensemble des visiteurs peuvent donc profiter des leçons et expérimenter les quizz. C'est une bêta test qui facilite les retours.
const studentSchema = new mongoose.Schema(
    {
        firstname: { type: String, required: [true, "Prénom obligatoire"] },
        lastname: { type: String, required: [true, "Nom de famille obligatoire"] },
        password: { type: String, required: [true, "Mot de passe obligatoire"], minlength: 8 },
        level: { type: String, required: [true, "Classe obligatoire"] },
        //? to follow the apprentice's progression for each lesson
        progress: [{
            lessonId : String,
            date : Date,
            completed : Boolean
        }],
        //? grades recording must be scalable with next year
        grades: [{ 
            quizzId : String,
            date : Date,
            advices : String
        }],
    },
    {
        timestamps: true
    }
)

export const Student = mongoose.model("students", studentSchema)