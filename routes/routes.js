import express from 'express';
import HomeGet from '../controllers/HomeGet.js';
import Auth from '../middlewares/Auth.js'

const router = express.Router();

router.route('/')
    .get(Auth, HomeGet)

    
export default router