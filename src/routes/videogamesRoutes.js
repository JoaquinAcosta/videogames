const express = require('express');
const router = express.Router();
const videogamesController = require('../controllers/videogamesController');

router.get('/videogames', videogamesController.list);
router.get('/videogames/detail/:id', videogamesController.detail);


module.exports = router;