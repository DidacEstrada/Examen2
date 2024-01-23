const mongoose = require('mongoose');

const PreguntesMongooseSchema = new mongoose.Schema({
    preguntes: {
        type: String,
        index: true
    },
    
    resposta: {
        type: String,
        index: true
    },
    
    categoria: {
        type: [String],
        index: true
    },
    
    });
    const PreguntesMongooseModel = mongoose.model('Preguntes', PreguntesMongooseSchema);
    
    function createPreguntes(preguntes) {
        const preguntesMongoose = new PreguntesMongooseModel(preguntes);
        return preguntesMongoose.save();
    }
    
    function findPreguntaByCategoria(categoria) {
        return PreguntesMongooseModel.find({categoria: {$in: categoria} });
    }
    
    function findAllPreguntes() {
        return PreguntesMongooseModel.find();
    }

    async function findPreguntaByText(preguntes) {
        return PreguntesMongooseModel.find({preguntes : { $regex: new RegExp(preguntes, 'i') }});
      }
    
    module.exports.createPreguntes = createPreguntes;
    module.exports.findPreguntaByCategoria = findPreguntaByCategoria;
    module.exports.findAllPreguntes = findAllPreguntes;
    module.exports.findPreguntaByText = findPreguntaByText;