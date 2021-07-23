const express = require('express')
const cors = require('cors')
const config = require('./config')
const PORT = config.PORT


const app = express()
app.use(cors())
app.use(express.json())


app.use('/api', require('./api/boards'))
app.use('/api', require('./api/tasks'))
app.use('/api', require('./api/user'))

app.use('/api/', require('./api/init'))


app.listen(PORT, () => {
  console.log('Server runnig on PORT: ' + PORT)
})
