const express = require('express')
const router = express.Router()

let boards = require('../db/boards.json')


// GET ALL BOARDS
router.get('/boards', (req, res) => {
  res.json(boards)
})


// GET A BOARD
router.get('/boards/:boardId', (req, res) => {
  const { boardId } = req.params
  const requestedBoard = boards.find(board => board.id == boardId)

  res.json(requestedBoard || {
    msg: `There is no board with ID: ${boardId}`
  })
})


// CREATE A BOARD
router.post('/boards', (req, res) => {
  boards.push(req.body)

  res.json(boards)
})


// DELETE A BOARD
router.delete('/boards/:boardId', (req, res) => {
  const { boardId } = req.params
  boards = boards.filter(board => board.id != boardId)

  res.json(boards)
})


// UPDATE A BOARD
router.put('/boards/:boardId', (req, res) => {
  const { boardId } = req.params
  const modification = req.body

  boards = boards.map(board =>
    board.id == boardId ? { ...board, ...modification } : board
  )

  res.json(boards)
})


module.exports = router