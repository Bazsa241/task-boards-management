const fs = require('fs')
const config = require('../config')


const readDb = () => {
  const data = fs.readFileSync(config.DB_PATH)
  return JSON.parse(data)
}

module.exports = readDb