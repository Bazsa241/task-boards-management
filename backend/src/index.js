const express = require('express')
const cors = require('cors')
const PORT = 5000


const app = express()
app.use(cors())
app.use(express.json())


app.use('/api', require('./api/boards'))
app.use('/api', require('./api/tasks'))
app.use('/api', require('./api/user'))


app.listen(PORT, () => {
  console.log('Server runnig on PORT: ' + PORT)
})
