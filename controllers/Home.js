import { Lesson } from "../models/Lesson.js";

export default (req, res) => {
    Lesson.find({})
        // Max display 6 lessons
        .limit(6)
        // Descending sort
        .sort({ date: -1 })
        .exec((err, lessons) => {
            if (err) return console.error(err)
            // On affiche le template "home.ejs" dans la page principale index
            res.render("index", { template: "./templates/home", lessons })
        })
}