const express = require("express")
const router = express.Router()
const writeDb = require('../utils/writeDb')

const config = require('../config')

router.delete('/init', (req, res) => {
  writeDb(config.INITIAL_DB)
  res.json(config.INITIAL_DB)
})

module.exports = router
