const user = require('./user')

const initRoutes = (app) => {
  app.use('/users', user);
}

module.exports = initRoutes;
