import express from 'express';
import HomeController from '../controllers/HomeController.js';
import { LessonDelete, LessonGet, LessonGetById, LessonPost } from '../controllers/LessonController.js';
import { TeacherSignUp } from '../controllers/TeacherController.js';
import Auth from '../middlewares/Auth.js'

const router = express.Router();

router.get('/', Auth, HomeController);

router.get('/api/lesson', LessonGet);
router.post('/api/lesson', LessonPost);
router.delete('/api/lesson', LessonDelete);
router.get('/api/lesson/:id', LessonGetById);

router.post('/signup/teacher', TeacherSignUp);

export default router