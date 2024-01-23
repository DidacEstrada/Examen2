const express = require('express');
const { getAllPreguntes, getPreguntesByCategoria } = require('../controllers/get-pregunta.controller');
const { checkSecretMiddleware } = require('../middlewares/check.secret.middleware');
const {registerPreguntes } = require('../controllers/register-pregunta.controller');

const router = express.Router();

router.post('/', registerPreguntes);
router.get('/', getAllPreguntes);
router.get('/:categoria', getPreguntesByCategoria);

module.exports.preguntaRouter = router;