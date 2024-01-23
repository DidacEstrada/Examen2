const express = require('express');
const { getAllPreguntes, getPreguntesByCategoria, getPreguntaByQualsevolText } = require('../controllers/get-pregunta.controller');
const { checkSecretMiddleware } = require('../middlewares/check.secret.middleware');
const {registerPreguntes } = require('../controllers/register-pregunta.controller');

const router = express.Router();

router.post('/', registerPreguntes);
router.get('/', getAllPreguntes);
router.post('/categoria', getPreguntesByCategoria);
router.get('/pregunta', getPreguntaByQualsevolText);

module.exports.preguntaRouter = router;