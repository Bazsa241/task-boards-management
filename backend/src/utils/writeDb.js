const fs = require('fs')
const config = require('../config')


const writeDb = data => {
  fs.writeFileSync(config.DB_PATH, JSON.stringify(data))
}

module.exports = writeDb 
