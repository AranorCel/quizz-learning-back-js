import { Lesson } from "../models/Lesson.js";
import dayjs from "dayjs";
import fs from "fs";
import formidable from "formidable";

// Afficher les leçons
export const LessonGet = async (req, res) => {
    let lesson
    try {
        lesson = await Lesson.find();
    } catch (err) {
        return res.status(500).json({ message: err });
    }
    if (!lesson) {
        return res.status(404).json({ message: `Cette leçon n'existe pas.` });
    }
    return res.status(200).json({ lesson })
}

// Afficher une leçon par son id
export const LessonGetById = async (req, res) => {
    const id = req.params.id;
    let lesson;
    try {
        lesson = await Lesson.findById(id);
    } catch (err) {
        return res.status(500).json({ message: err });
    }
    if (!lesson) {
        return res.status(404).json({ message: `Cette leçon n'existe pas.` });
    }
    return res.status(200).json({ lesson })
}

// Ajouter une leçon
export const LessonPost = (req, res) => {

    let lesson = new Lesson();
    lesson.title = req.body.title || "";
    lesson.author = req.body.author || "";
    lesson.discipline = req.body.discipline || "";
    lesson.cycle = req.body.cycle || "";
    lesson.description = req.body.description || "";
    lesson.date = dayjs().format('DD/MM/YYYY à HH[h]mm');
    lesson.knowledges = req.body.knowledges;

    lesson.save();
    return res.status(201).json(req.body);

}

//Supprimer une leçon par son id
export const LessonDelete = async (req, res) => {
    const id = req.params.id;
    let lesson;
    try {
        lesson = await Lesson.findByIdAndDelete(id);

    } catch (err) {
        return res.status(500).json({ message: err });
    }
    if (!lesson) {
        return res.status(404).json({ message: `Cette leçon n'existe pas.` });
    }
    return res.status(200).json({ message: 'Suppression effectuée.' });
}