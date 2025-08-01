const express = require('express')

const router = express.Router()



router.get('/', (req, res) => {
	res.send('list movies')
})



router.get('/:id', (req, res) => {
	res.send(`single movie ${req.params.id}`)
})
module.exports = router