const express = require('express')
const app = express()
const PORT = process.env.PORT



app.listen(PORT, () => {
	console.log(`Server is Listening http://127.0.0.1:${PORT}`)
})


app.get('/', (req, res) => {
	res.send('my app')
})

app.get('/movies', (req, res) => {
	res.send('list movies')
})



app.get('/movies/:id', (req, res) => {
	res.send(`single movie ${req.params.id}`)
})