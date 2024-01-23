const {createPreguntes} = require('../models/preguntes.repository');
async function registerPreguntes(req, res) {
    console.log(req.body);
    console.log(req.headers);
  
    const newPreguntes = await createPreguntes(req.body);
    res.json(newPreguntes);
  }
  
  module.exports.registerPreguntes = registerPreguntes;