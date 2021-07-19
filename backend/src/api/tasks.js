const express = require('express')
const router = express.Router()
const readDb = require('../utils/readDb')
const writeDb = require('../utils/writeDb')

let boards = readDb()


// GET ALL TASK FROM A CATEGORY
router.get('/tasks/:boardId/:category/', (req, res) => {
  const { category, boardId } = req.params
  
  const tasks = boards.find(board => board.id == boardId)[category]  

  res.json(tasks || { msg: 'Wrong board ID' })
})


// GET A TASK FROM A CATEGORY
router.get('/tasks/:boardId/:category/:taskId', (req, res) => {
  const { category, boardId, taskId } = req.params

  const tasks = boards.find(board => board.id == boardId)[category]
  const requestedTask = tasks.find(task => task.id == taskId)

  res.json(requestedTask || { msg: 'Wrong board or task ID' })
})


// CREATE A TASK TO A CATEGORY
router.post('/tasks/:boardId/:category/', (req, res) => {
  const { category, boardId } = req.params
  const newTask = req.body

  const requestedBoard = boards.find(board => board.id == boardId)
  requestedBoard[category].push(newTask)

  writeDb(boards)
  res.json(boards)
})


// DELETE A TASK FROM A CATEGORY
router.delete('/tasks/:boardId/:category/:taskId', (req, res) => {
  const { boardId, category, taskId } = req.params

  const requestedBoard = boards.find(board => board.id == boardId)
  requestedBoard[category] = requestedBoard[category].filter(task => task.id != taskId)

  writeDb(boards)
  res.json(boards)
})


// UPDATE A TASK FROM A CATEGORY
router.put('/tasks/:boardId/:category/:taskId', (req, res) => {
  const { boardId, category, taskId } = req.params
  const modification = req.body

  const requestedBoard = boards.find(board => board.id == boardId)

  requestedBoard[category] = requestedBoard[category].map(task =>
    task.id == taskId ? { ...task, ...modification } : task
  )
  
  writeDb(boards)
  res.json(boards)
})


module.exports = router
