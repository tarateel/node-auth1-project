const express = require('express');
const Users = require('./users-model');
const restricted = require('../middleware/restricted');

const router = express.Router();

router.get('/', restricted(), async (req, res, next) => {
  try {
    const users = await Users.find()

    res.json(users)
  } catch (err) {
    next(err)
  }
});

module.exports = router;