const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model.js')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    Movies.find()
    .then((films) => {res.render('movies', {films})
     })   
     .catch((err) => {
        console.log(err)
    }) 
});

router.get('/movie/:movieId', (req, res, next) => {
    let {movieId} = req.params
    console.log(req.params);
    Movies.findById(movieId)
    .then((film) => {res.render('movie', {film})
    })   
    .catch((err) => {
        console.log(err)
    }) 
});

module.exports = router;
