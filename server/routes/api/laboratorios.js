const Laboratorios = require('../../models/Laboratorios');

module.exports = (app) => {
  app.get('/api/laboratorios', (req, res, next) => {
    Laboratorios.aggregate(
      [
        { $group : {
            _id: '$nombre',
            profesionales: { $push: '$profesional'},
            labcod:{$first: '$labcod'},
            direccion: {$first: '$direccion'},
            telefono: {$first: '$telefono'},
            departamento: {$first: '$departamento'}
          }
        }
      ]
    ).sort({ _id: 1 }).then(function (labs) {
      res.send(labs);
    });
  });
}
