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

  res.json(requestedBoard || { msg: 'hey' })
})

// CREATE A BOARD
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

// UPDATE A BOARD
app.put('/api/boards/:boardId', (req, res) => {
  const { boardId } = req.params
  const modification = req.body

  boards = boards.map(board =>
    board.id == boardId ? { ...board, ...modification } : board
  )

  res.json(boards)
})

// GET ALL TASK FROM A CATEGORY
app.get('/api/tasks/:boardId/:category/', (req, res) => {
  const { category, boardId } = req.params
  const tasks = boards.find(board => board.id == boardId)[category]  

  res.json(tasks || { msg: 'hey' })
})

// GET A TASK FROM A CATEGORY
app.get('/api/tasks/:boardId/:category/:taskId', (req, res) => {
  const { category, boardId, taskId } = req.params
  const tasks = boards.find(board => board.id == boardId)[category]
  const requestedTask = tasks.find(task => task.id == taskId)

  res.json(requestedTask || { msg: 'hey' })
})

// CREATE A TASK TO A CATEGORY
app.post('/api/tasks/:boardId/:category/', (req, res) => {
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
app.delete('/api/tasks/:boardId/:category/:taskId', (req, res) => {
  const { boardId, category, taskId } = req.params

  boards.forEach(board => {
    if(board.id == boardId) {
      board[category] = board[category].filter(task => task.id != taskId)
    }
  })

  res.json(boards)
})

// UPDATE A TASK FROM A CATEGORY
app.put('/api/tasks/:boardId/:category/:taskId', (req, res) => {
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

app.listen(PORT, () => {
  console.log('Server runnig on PORT: ' + PORT)
})
