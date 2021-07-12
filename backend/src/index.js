const express = require('express')
const cors = require('cors')
const PORT = 5000
let boards = require('./db/boards.json')

const app = express()
app.use(cors())
app.use(express.json())


// GET ALL BOARDS
app.get('/api/boards', (req, res) => {
  res.json(boards)
})

// GET A BOARD
app.get('/api/boards/:boardId', (req, res) => {
  const { boardId } = req.params
  const requestedBoard = boards.find(board => board.id == boardId)
  res.json(requestedBoard || {})
})

// ADD A BOARD
app.post('/api/boards', (req, res) => {
  boards.push(req.body)
  res.json(boards)
})

// DELETE A BOARD
app.delete('/api/boards/:boardId', (req, res) => {
  const { boardId } = req.params
  boards = boards.filter(board => board.id != boardId)
  res.json(boards)
})

// MODIFY A BOARD
app.put('/api/boards/:boardId', (req, res) => {
  const { boardId } = req.params
  const modification = req.body

  boards = boards.map(board =>
    board.id == boardId ? { ...board, ...modification } : board
  )
  res.json(boards)
})


app.listen(PORT, () => {
  console.log('Server runnig on PORT: ' + PORT)
})
