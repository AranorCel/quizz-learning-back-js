import { Teacher } from "../models/Teacher.js";
import bcrypt from "bcrypt"

// Create a teacher account with sign up process
export const TeacherSignUp = async (req, res) => {

    // First, we need to check if teacher already exists
    let existingTeacher;
    try {
        existingTeacher = await Teacher.findOne({ email: req.body.email });
    } catch (err) {
        return res.status(500).json({ message: `Erreur du serveur.` })
    }
    if (existingTeacher) {
        return res.status(400).json({ message: 'Un utilisateur avec le même email existe déjà.' });
    }

    // Secondly, we have to create a password protection with bcrypt
    const salt = await bcrypt.genSalt(4);
    let hashedPassword;
    try {
        hashedPassword = bcrypt.hashSync(req.body.password, salt);
    } catch (err) {
        return res.status(500).json({ message: `Erreur du serveur.` })
    }

    // Finally, we create a new Teacher
    let teacher = new Teacher({...req.body, password : hashedPassword});

    try {
        await teacher.save();
    } catch (err) {
        return res.status(500).json({ message: `Erreur du serveur.` });
    }
    return res.status(201).json({ teacher })
}

