const express = require('express')

const router = express.Router()

router.use('/api/v1/user', require('./users'))

router.get('/', (req, res) => {
    res.status(200).json('BFF Ready')
})

module.exports = router