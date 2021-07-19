const express = require('express')
const router = express.Router()

let boards = require('../db/boards.json')


// GET USER BOARDS
router.get('/user', (req, res) => {
  res.json(boards)
})


// SET USER BOARDS
router.post('/user', (req, res) => {
  boards = req.body
  res.json(boards)
})


module.exports = router