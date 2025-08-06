const express = require('express');
const router = express.Router();
const MoviesController = require('../controller/MoviesController');





router.get('/', MoviesController.index)



router.get('/:id', MoviesController.show)


router.get('/:id/reviews', MoviesController.storeReview)

module.exports = router