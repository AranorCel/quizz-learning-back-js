import { Student } from "../models/Student.js";

// Create a student account with sign up process
export const StudentSignUp = async (req, res) => {

    // First, we need to check if student already exists
    let existingStudent;
    try {
        existingStudent = await Student.findOne({ firstname: req.body.firstname, lastname : req.body.lastname });
    } catch (err) {
        return res.status(500).json({ message: `Erreur du serveur.` })
    }
    if (existingStudent) {
        return res.status(400).json({ message: 'Un élève existe déjà.' });
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
    let student = new Student({ ...req.body, password: hashedPassword });

    try {
        await student.save();
    } catch (err) {
        return res.status(500).json({ message: `Erreur du serveur.` });
    }
    return res.status(201).json({ student })
}
