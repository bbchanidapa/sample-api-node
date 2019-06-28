const express = require('express')
const app = express()
const { db, firebaseConfig } = require('../../../config/firebase')

const router = express.Router({ mergeParams: true })

// db().ref('/events/down_port/').on("child_added", (e) => {
//     console.log('LOG: ', e.val())
// })

router.post('/', (req, res) => {
    console.log('log :: ', req.body)
    db().ref('/events/down_port').set(req.body)
})

module.exports = router