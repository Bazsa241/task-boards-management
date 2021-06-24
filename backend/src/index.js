const express = require('express')
const cors = require('cors')
const PORT = 5000

const app = express()

app.use(cors())

let boards = [
  {
    id: 2387645,
    title: 'My First Board',
    todo: [
      {
        id: 7812635,
        title: "Task1",
        description: "Lorem ipsum dolor sit amet consectetur"
      },
    ],
    inProgress: [],
    done: [],
  },
  {
    id: 1287635,
    title: 'My Second Board',
    todo: [],
    inProgress: [],
    done: [],
  },
] 

app.get('/api/boards', (req, res) => {
  res.send(JSON.stringify(boards))
})

app.listen(PORT, () => {
  console.log('Server runnig on PORT: ' + PORT)
})
