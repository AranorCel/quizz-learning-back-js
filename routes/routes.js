import express from 'express';
import { HomeLessonGet } from '../controllers/HomeController.js';
import { LessonDelete, LessonGet, LessonGetById, LessonPost, LessonPutById } from '../controllers/LessonController.js';
import { LoginStudent, LoginTeacher } from '../controllers/LoginController.js';
import { QuizzDelete, QuizzGet, QuizzPost, QuizzGetById, QuizzPutById } from '../controllers/QuizzController.js';
import { TeacherSignUp } from '../controllers/TeacherController.js';
import Auth from '../middlewares/Auth.js'

const router = express.Router();

// Définition de la route Home
router.get('/api/home',  HomeLessonGet);

router.get('/api/lesson', LessonGet);
router.post('/api/lesson', Auth, LessonPost);
router.put('/api/lesson/:id', LessonPutById);
router.delete('/api/lesson/:id', LessonDelete);
router.get('/api/lesson/:id', LessonGetById);

router.get('/api/quizz', QuizzGet);
router.post('/api/quizz', Auth, QuizzPost);
router.put('/api/quizz/:id', QuizzPutById);
router.delete('/api/quizz/:id', QuizzDelete);
router.get('/api/quizz/:id', QuizzGetById);

router.post('/signup/teacher', TeacherSignUp);

router.post('/login/student', LoginStudent);
router.post('/login/teacher', LoginTeacher);

export default router