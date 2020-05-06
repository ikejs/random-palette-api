const express = require('express')
const randomRoutes = require('./random.js')

const router = express.Router()

router.use('/random', randomRoutes)

module.exports = router