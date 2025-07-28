const express = require('express');
const router = express.Router();
const { createPost } = require('../controllers/postController');


const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, createPost);          


module.exports = router;
