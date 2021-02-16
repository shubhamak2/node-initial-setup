const getUserService = require('../services/user/get')

const userController = {
  getUser: (req, res) => {
    const data = getUserService();
    res.status(400).send({ data });
  }
}

module.exports = userController;
