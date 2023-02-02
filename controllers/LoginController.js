import { Student } from "../models/Student.js";
import { Teacher } from "../models/Teacher.js";
import bcrypt from "bcrypt"

// Login Student
export const LoginStudent = async (req, res, next) => {
    const { email, password } = req.body;
    let existingStudent;
    try {
        existingStudent = await Student.findOne({ email });
    } catch (err) {
        return console.log(err)
    }
    if (!existingStudent) {
        return res.status(404).json({ message: 'Identification erronée' });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingStudent.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Mot de passe incorrect' });
    }
    return res.status(200).json({ message: 'Connexion validée', user: existingStudent, isTeacher : false })
}

// Login Teacher
export const LoginTeacher = async (req, res, next) => {
    const { email, password } = req.body;
    let existingTeacher;
    try {
        existingTeacher = await Teacher.findOne({ email });
    } catch (err) {
        return res.status(500).json({ message: "Erreur d'identification" });
    }
    if (!existingTeacher) {
        return res.status(404).json({ message: 'Professeur non identifié' });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingTeacher.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: 'Mot de passe incorrect' });
    }
    return res.status(200).json({ message: 'Connexion validée', user: existingTeacher, isTeacher : true })
}