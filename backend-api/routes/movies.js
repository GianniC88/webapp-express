const express = require('express');
const router = express.Router();
const MoviesController = require('../controller/MoviesController');



//index: http://localhost:3030/api/movies/

router.get('/', MoviesController.index)

//show: http://localhost:3030/api/movies/1


router.get('/:id', MoviesController.show)

//show: http://localhost:3030/api/movies/1/review


router.post('/:id/review', MoviesController.storeReview)

module.exports = router