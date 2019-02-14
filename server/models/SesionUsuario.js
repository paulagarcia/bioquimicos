const mongoose = require('mongoose');

const SesionUsuarioSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: ''
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
},
{ collection: 'usuarios' } );

module.exports = mongoose.model('SesionUsuario', SesionUsuarioSchema);
