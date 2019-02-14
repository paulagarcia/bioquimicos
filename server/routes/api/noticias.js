const Noticias = require('../../models/Noticias');

module.exports = (app) => {
  app.get('/api/noticias', (req, res, next) => {
    Noticias.find({}).limit(9).sort({ fecha: -1 }).then(function (notas) {
      res.send(notas);
    });
  });
}
