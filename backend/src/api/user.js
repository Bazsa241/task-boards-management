const express = require('express')
const router = express.Router()
const writeDb = require('../utils/writeDb')
const readDb = require('../utils/readDb')

// let boards = require('../db/boards.json')
let boards = readDb()


// GET USER BOARDS
router.get('/user', (req, res) => {
  res.json(boards)
})


// SET USER BOARDS
router.post('/user', (req, res) => {
  boards = req.body
  writeDb(boards)
  res.json(boards)
})


module.exports = router