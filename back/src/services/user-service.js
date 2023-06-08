const { NotAuthorized } = require('../exceptions/user-exceptions')

const { User } = require('../models/user');
const jwt = require('jsonwebtoken');

async function login(name, password) {
  const user = await User.findOne({
    where: {
      name: name,
      password: password
    }
  })

  if (!user) {
    throw new NotAuthorized("Nombre de usuario y/o contraseña incorrectos")
  }

  const token = jwt.sign({
    id: user.id,
    name: user.name
  }, 'ClaveUltraSecreta')

  return {
    accessToken: token
  }
}

module.exports = { login };