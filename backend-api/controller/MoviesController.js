const connection = require('../dataBase/connection')



function index(req, res) {

	const sql = 'SELECT * FROM movies'
	connection.query(sql, (err, result) => {
		if (err) return res.status(500).json({
			error: true,
			message: err.message
		})
		console.log(result)
		res.json({
			error: false,
			data: result
		})
	})

}



function show(req, res) {
	console.log(req.params);

	const { id } = req.params

	const sql = 'SELECT * FROM movies WHERE id=?'

	connection.execute(sql, [id], (err, result) => {
		if (err) return res.status(500).json({
			error: true,
			message: err.message
		})

		if (result.length === 0) {
			return res.status(404).json({
				error: true,
				message: 'NOT FOUND'
			})

		}
		const movie = result[0]
		const reviewsSql = 'SELECT * FROM reviews WHERE movie_id=?'
		connection.execute(reviewsSql, [id], (err, result) => {
			if (err) return res.status(500).json({
				error: true,
				message: err.message
			})
			const MovieReviews = result
			movie.reviews = MovieReviews
			console.log(movie)
			res.json(movie)
		})

	})
}






module.exports = {
	index,
	show
}