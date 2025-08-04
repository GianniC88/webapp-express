const express = require('express')
const app = express()
const PORT = process.env.PORT
const MoviesRouter = require('./routes/movies')


const cors = require('cors')
app.use(cors())


app.use('/api/movies', MoviesRouter)

app.use(express.static('piblic'))
app.listen(PORT, () => {
	console.log(`Server is Listening http://127.0.0.1:${PORT}`)
})


app.get('/', (req, res) => {
	res.send('my app')
})