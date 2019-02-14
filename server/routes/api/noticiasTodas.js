const Noticias = require('../../models/Noticias');

module.exports = (app) => {
  app.get('/api/noticiasTodas', (req, res, next) => {
    Noticias.find({}).sort({ fecha: -1 }).then(function (notas) {
      res.send(notas);
    });
  });
}
