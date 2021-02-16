const express = require('express');
const args = { mergeParams: true }
const userRouter = express.Router(args)
const userController = require('../controllers/user');

userRouter.route('/')
  .get(userController.getUser)

module.exports = userRouter;
