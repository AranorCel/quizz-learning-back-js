import express from 'express';
import Home from '../controllers/Home.js';
import Auth from '../middlewares/Auth.js'

const router = express.Router();

router.route('/')
    .get(Auth, Home)

    
export default router