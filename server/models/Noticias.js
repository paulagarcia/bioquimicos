const mongoose = require('mongoose');

const NoticiasSchema = new mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
  fecha: {
    type: Date,
    required: true,
    default: new Date()
  },
  titulo: String,
  cuerpo: String,
  foto: String,
  masFotos: String,
  video: String,
},
{ collection: 'news' } );

module.exports = mongoose.model('Noticias', NoticiasSchema);
