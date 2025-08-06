const notFound = (req, res, next) => {
	res.status(404).json({
		error: true,
		messagge: 'Not Found'
	})
}
module.exports = notFound