const AuthController = require('../controllers/auth');
const log = require('../middlewares/Logger');

const router = require('express').Router();

router.post('/login', AuthController.loginController);
router.post('/signup', AuthController. signupController);
router.get('/user/:id', AuthController. getUserController);

module.exports = router;