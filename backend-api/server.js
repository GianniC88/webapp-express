const express = require('express')
const app = express()
const PORT = process.env.PORT
const MoviesRouter = require('./routes/movies')
const notFound = require('./middleware/notFound')
const serverError = require('./middleware/serverError')
app.use('/images', express.static('public/img'))

const cors = require('cors')
app.use(cors())


app.use('/api/movies', MoviesRouter)

app.use(express.static('public'))

app.listen(PORT, () => {
	console.log(`Server is Listening http://127.0.0.1:${PORT}`)
})


app.get('/', (req, res) => {
	res.send('my app')
})


app.use(notFound)
app.use(serverError)