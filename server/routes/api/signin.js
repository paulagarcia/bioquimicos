const Usuario = require('../../models/Usuario');
const SesionUsuario = require('../../models/SesionUsuario');


module.exports = (app) => {

  app.post('/api/account/signin', (req, res, next) => {
    const { body } = req;
    let { name } = body;
    const { password } = body;

    if (!name) {
      return res.send({
        success: false,
        message: 'Debes completar el Usuario'
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: 'Debes completar la contraseña'
      });
    }

    name = name.toLowerCase();
    name = name.trim();

    Usuario.find({
      name: new RegExp('^'+name+'$', "i")
    }, (err, users) => {
      if (err) {
        console.log('err 2:', err);
        return res.send({
          success: false,
          message: 'Error: server error'
        });
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: 'El usuario no existe o es incorrecto'
        });
      }

      const user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: 'La contraseña es incorrecta'
        });
      }

      // Otherwise correct user
      const sesionUsuario = new SesionUsuario();
      sesionUsuario.userId = user._id;
      sesionUsuario.save((err, doc) => {
        if (err) {
          console.log(err);
          return res.send({
            success: false,
            message: 'Error en el inicio de sesión'
          });
        }

        return res.send({
          success: true,
          message: '',
          token: doc._id
        });
      });
    });
  });

  app.get('/api/account/verify', (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test

    // Verify the token is one of a kind and it's not deleted.

    SesionUsuario.find({
      _id: token,
      isDeleted: false
    }, (err, sessions) => {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }

      if (sessions.length != 1) {
        return res.send({
          success: false,
          message: 'Error: Invalid'
        });
      } else {
        return res.send({
          success: true,
          message: 'Good'
        });
      }
    });
  });

  app.get('/api/account/logout', (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test

    // Verify the token is one of a kind and it's not deleted.

    SesionUsuario.findOneAndUpdate({
      _id: token,
      isDeleted: false
    }, {
      $set: {
        isDeleted:true
      }
    }, null, (err, sessions) => {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }

      return res.send({
        success: true,
        message: 'Good'
      });
    });
  });
};
