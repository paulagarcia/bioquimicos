const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

function toLower(v) {
  return v.toLowerCase();
}

var UsuarioSchema = new mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   name: {
     type: String,
     default: '',
     set: toLower
   },
  password: {
    type: String,
    default: ''
  },
},
{ collection: 'usuarios' } );

UsuarioSchema.path('name').set(toLower);
UsuarioSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
//UsuarioSchema.methods.validPassword = function(password) {
  //return bcrypt.compareSync(password, this.password);
//};
UsuarioSchema.methods.validPassword = function(password) {
  return (password === this.password);
};

module.exports = mongoose.model('Usuario', UsuarioSchema);
