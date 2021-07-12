const express = require('express')
const router = express.Router()

let boards = require('../db/boards.json')


// GET ALL TASK FROM A CATEGORY
router.get('/tasks/:boardId/:category/', (req, res) => {
  const { category, boardId } = req.params
  const tasks = boards.find(board => board.id == boardId)[category]  

  res.json(tasks || { msg: 'hey' })
})


// GET A TASK FROM A CATEGORY
router.get('/tasks/:boardId/:category/:taskId', (req, res) => {
  const { category, boardId, taskId } = req.params
  const tasks = boards.find(board => board.id == boardId)[category]
  const requestedTask = tasks.find(task => task.id == taskId)

  res.json(requestedTask || { msg: 'hey' })
})


// CREATE A TASK TO A CATEGORY
router.post('/tasks/:boardId/:category/', (req, res) => {
  const { category, boardId } = req.params
  const newTask = req.body

  boards.forEach(board => {
    if(board.id == boardId) {
      board[category].push(newTask)
    }
  })

  res.json(boards)
})


// DELETE A TASK FROM A CATEGORY
router.delete('/tasks/:boardId/:category/:taskId', (req, res) => {
  const { boardId, category, taskId } = req.params

  boards.forEach(board => {
    if(board.id == boardId) {
      board[category] = board[category].filter(task => task.id != taskId)
    }
  })

  res.json(boards)
})


// UPDATE A TASK FROM A CATEGORY
router.put('/tasks/:boardId/:category/:taskId', (req, res) => {
  const { boardId, category, taskId } = req.params
  const modification = req.body

  boards.forEach(board => {
    if(board.id == boardId) {
      board[category] = board[category].map(task =>
        task.id == taskId ? { ...task, ...modification } : task
      )
    }
  })

  res.json(boards)
})


module.exports = router
