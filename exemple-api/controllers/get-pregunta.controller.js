const { findPreguntaByCategoria, findAllPreguntes, findPreguntaByText} = require('../models/preguntes.repository');
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
    console.log(req.body);
    
    
    const pregunta = await findPreguntaByCategoria(req.body.categoria);
    if (!pregunta || pregunta.length === 0) {
      return res.status(400).send('No existeix cap pregunta de aquesta categoria');
    }
    res.json(pregunta);
  }
  
  async function getPreguntaByQualsevolText(req, res) {
    
  
    // Modificar la búsqueda para que sea insensible a mayúsculas y minúsculas, y acepte espacios
    const pregunta = await findPreguntaByText(req.body.preguntes);
  
  
    res.json(pregunta);
  }
  module.exports.getAllPreguntes = getAllPreguntes;
  module.exports.getPreguntesByCategoria = getPreguntesByCategoria;
  module.exports.getPreguntaByQualsevolText = getPreguntaByQualsevolText;