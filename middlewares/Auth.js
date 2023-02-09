// Fonctionnalité d'authentification gérée depuis le front via Recoil. Amélioration possible pour protéger les routes de l'API.

export default (req, res, next) => {
    // res.locals.isTeacher = req.session?.isTeacher ? true : false
    next();
}