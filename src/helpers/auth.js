const auth = {};

const jwt = require('jsonwebtoken');

auth.estaAutenticado = (req, res, next) => {
  if (req.isAuthenticated()) {
    console.log("Usuario logeado: ", req.isAuthenticated());
    return next();
  }
  req.flash("error_msg", "Usted no está autorizado");
  res.redirect("/users/ingresar");
};

auth.verificaToken = (req, res, next) => {
  let token = req.get("token"); //En vez de token si es Authorización

  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          message: "Token no válido."
        }
      });
    } else {
      req.usuario = decoded.usuario;
      next();
    }
  });
};

module.exports = auth;
