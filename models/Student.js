import mongoose from "mongoose"

// Création du schéma d'un élève
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
        isTeacher: Boolean,
        isAdmin: Boolean,
    },
    {
        timestamps: true
    }
)

export const Student = mongoose.model("students", studentSchema)