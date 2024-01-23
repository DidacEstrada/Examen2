const { findPreguntaByCategoria, findAllPreguntes} = require('../models/preguntes.repository');
async function getAllPreguntes(req, res){
    console.log(req.params);
    console.log(req.headers);
    const pregunta = await findAllPreguntes();
    if (!pregunta || pregunta.length === 0) {
      return res.status(400).send('No existeix cap pregunta');
    }
    res.json(pregunta);
  }
  
  async function getPreguntesByCategoria(req, res) {
    console.log(req.params);
    console.log(req.headers);
    const preguntaCategoria= req.params.categoria.split(',');
    const pregunta = await findPreguntaByCategoria(preguntaCategoria);
    if (!pregunta || pregunta.length === 0) {
      return res.status(400).send('No existeix cap pregunta de aquesta categoria');
    }
    res.json(pregunta);
  }
  
  module.exports.getAllPreguntes = getAllPreguntes;
  module.exports.getPreguntesByCategoria = getPreguntesByCategoria;