import { Lesson } from "../models/Lesson.js";

export const HomeLessonGet = async (req, res) => {
    let lesson
    try {
        lesson = await Lesson.find()
            // Max display lessons
            .limit(2)
            // Descending sort by date
            .sort({ date: -1 })
    } catch (err) {
        return res.status(500).json({ message: err });
    }
    if (!lesson) {
        return res.status(404).json({ message: `Cette leçon n'existe pas.` });
    }
    return res.status(200).json({ lesson })
}

// export const HomeQuizzGet = async (req, res) => {
//     let quizz
//     try {
//         quizz = await Quizz.find()
//             // Max display lessons
//             .limit(2)
//             // Descending sort by date
//             .sort({ date: -1 })
//     } catch (err) {
//         return res.status(500).json({ message: err });
//     }
//     if (!quizz) {
//         return res.status(404).json({ message: `Cet quizz n'existe pas.` });
//     }
//     return res.status(200).json({ quizz })
// }