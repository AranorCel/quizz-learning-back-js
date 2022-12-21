import router from './routes/routes.js';
import * as dotenv from 'dotenv'
import express from 'express';
import connectDB from "./config/DataBase.js"
import cors from "cors"
import dotenvExpand from 'dotenv-expand'

dotenv.config()
dotenvExpand.expand(dotenv)

// Importation de express et on l'assigne à la const app
export const app = express();

// Nécessaire pour l'affichage avec EJS du back office (test initial -> Ok puis utilisation de Insomnia REST)
app.set('view engine', 'ejs');

// Création de l'access public
app.use(express.static('public'));

// Eviter les problèmes de crossorigin
app.use(cors());

// Pour la gestion des JSON
app.use(express.json())

// Pour l'accessibilité en méthode POST
app.use(express.urlencoded({ extended: true }))

// Chargement des Routes
app.use("/", router)

// Connection à la Base de Données
connectDB()

// Ouverture de l'écoute sur le port
app.listen(process.env.BACKPORT, () =>
    console.log(`Serveur started on port http://${process.env.BACKHOSTNAME}:${process.env.BACKPORT}`));