import { Quizz } from "../models/Quizz.js";
import dayjs from "dayjs"

// Afficher les quizz
export const QuizzGet = async (req, res) => {
    let quizz
    try {
        quizz = await Quizz.find();
    } catch (err) {
        return res.status(500).json({ message: err });
    }
    if (!quizz) {
        return res.status(404).json({ message: `Ce quizz n'existe pas.` });
    }
    return res.status(200).json({ quizz })
}

// Afficher un quizz par son id
export const QuizzGetById = async (req, res) => {
    const id = req.params.id;
    let quizz;
    try {
        quizz = await Quizz.findById(id);
    } catch (err) {
        return res.status(500).json({ message: err });
    }
    if (!quizz) {
        return res.status(404).json({ message: `Ce quizz n'existe pas.` });
    }
    return res.status(200).json({ quizz })
}

// Ajouter un quizz
export const QuizzPost = (req, res) => {

    let quizz = new Quizz();
    quizz.title = req.body.title || "";
    quizz.author = req.body.author || "";
    quizz.discipline = req.body.discipline || "";
    quizz.cycle = req.body.cycle || "";
    quizz.description = req.body.description || "";
    quizz.date = dayjs().format('DD/MM/YYYY à HH[h]mm');
    quizz.tests = req.body.tests;

    quizz.save();
    return res.status(201).json(req.body);
}
// Actualiser un quizz après l'avoir identifié par son id
export const QuizzPutById = async (req, res) => {
    let quizz;
    if (Quizz.findOne({ _id: req.params.id })) {
        return res.status(400).json({ message: 'Ce quizz existe toujours.' });
    }
    try {
        delete req.body._id
        quizz = await Quizz.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
    } catch (err) {
        return res.status(500).json({ message: err });
    }
    if (!quizz) {
        return res.status(404).json({ message: `Ce quizz n'existe pas.` });
    }
    return res.status(201).json(req.body);
}

//Supprimer un quizz par son id
export const QuizzDelete = async (req, res) => {
    const id = req.params.id;
    let quizz;
    try {
        quizz = await Quizz.findByIdAndDelete(id);

    } catch (err) {
        return res.status(500).json({ message: err });
    }
    if (!quizz) {
        return res.status(404).json({ message: `Ce quizz n'existe pas.` });
    }
    return res.status(200).json({ message: 'Suppression effectuée.' });
}