import { Quizz } from "../models/Quizz.js";
import multer from "multer"
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
    return res.status(200).json( {quizz} )
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
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
          cb(null, 'uploads/');
        },
        filename: function(req, file, cb) {
          cb(null, Date.now() + '-' + file.originalname);
        }
      });
      const upload = multer({ storage });

    upload.single('upload_file');

    let quizz = new Quizz();
    quizz.title = req.body.title || "";
    quizz.author = req.body.author || "";
    quizz.discipline = req.body.discipline || "";

    quizz.image = "/public/data/uploads/" + req.file;
    quizz.cycle = req.body.cycle || "";
    quizz.description = req.body.description || "";
    quizz.date = dayjs().format('DD/MM/YYYY à HH[h]mm');
    quizz.tests = req.body.tests;

    quizz.save();
    return res.status(201).json(req.body)
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