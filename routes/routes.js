import express from 'express';
import Home from '../controllers/Home.js';
import { LessonDelete, LessonGet, LessonGetById, LessonPost } from '../controllers/Lesson.js';
import Auth from '../middlewares/Auth.js'

const router = express.Router();

router.get('/', Auth, Home);

router.get('/api/lesson', LessonGet);
router.post('/api/lesson', LessonPost);
router.delete('/api/lesson', LessonDelete);
router.get('/api/lesson/:id', LessonGetById);

export default router