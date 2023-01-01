import express from 'express';
import HomeController from '../controllers/HomeController.js';
import { LessonDelete, LessonGet, LessonGetById, LessonPost } from '../controllers/LessonController.js';
import { LoginStudent, LoginTeacher } from '../controllers/LoginController.js';
import { TeacherSignUp } from '../controllers/TeacherController.js';
import Auth from '../middlewares/Auth.js'

const router = express.Router();

router.get('/', Auth, HomeController);

router.get('/api/lesson', LessonGet);
router.post('/api/lesson', LessonPost);
router.delete('/api/lesson/:id', LessonDelete);
router.get('/api/lesson/:id', LessonGetById);

router.post('/signup/teacher', TeacherSignUp);

router.post('/login', LoginStudent);
router.post('/login/teacher', LoginTeacher);

export default router