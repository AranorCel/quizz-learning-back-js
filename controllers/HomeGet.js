import { Lesson } from "../models/Lesson.js";

export default (req, res) => {
    Lesson.find({})
        .limit(6)
        .sort({ date: -1 })
        .exec((err, lessons) => {
            if (err) return console.error(err)
            res.render("index", { lessons })
        })
}