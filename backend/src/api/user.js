const express = require('express')
const router = express.Router()
const writeDb = require('../utils/writeDb')
const readDb = require('../utils/readDb')

let boards = readDb()


// GET USER BOARDS
router.get('/user', (req, res) => {
  res.json(boards)
})


// SET USER BOARDS
router.post('/user', (req, res) => {
  const { body } = req

  if (Array.isArray(body)){

    boards = body
    writeDb(boards)
    res.json(boards)

  } else {

    res.json({msg: "Wrong data"})
    
  }

})


module.exports = router