import express from 'express';
import { HomeLessonGet } from '../controllers/HomeController.js';
import { LessonDelete, LessonGet, LessonGetById, LessonPost } from '../controllers/LessonController.js';
import { LoginStudent, LoginTeacher } from '../controllers/LoginController.js';
import { TeacherSignUp } from '../controllers/TeacherController.js';
import Auth from '../middlewares/Auth.js'
import { QuizzDelete, QuizzGet, QuizzPost, QuizzGetById } from '../controllers/QuizzController.js';

const router = express.Router();

router.get('/api/home', Auth, HomeLessonGet);

router.get('/api/lesson', LessonGet);
router.post('/api/lesson', LessonPost);
router.delete('/api/lesson/:id', LessonDelete);
router.get('/api/lesson/:id', LessonGetById);

router.get('/api/quizz', QuizzGet);
router.post('/api/quizz', QuizzPost);
router.delete('/api/quizz/:id', QuizzDelete);
router.get('/api/quizz/:id', QuizzGetById);

router.post('/signup/teacher', TeacherSignUp);

router.post('/login/student', LoginStudent);
router.post('/login/teacher', LoginTeacher);

export default router