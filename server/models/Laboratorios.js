const mongoose = require('mongoose');

const LaboratorioSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  labcod: String,
  nombre: String,
  departamento: String,
  profcod: String,
  profesional: String,
  direccion: String,
  cp: String,
  telefono: String
},
{ collection: 'laboratorios' } );

module.exports = mongoose.model('Laboratorios', LaboratorioSchema);
