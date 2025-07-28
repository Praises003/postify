const express = require('express');
const router = express.Router();
const { createPost } = require('../controllers/postcontroller');
const { getUserWithPosts } = require("../controllers/getUserWithPosts")
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, createPost);          


module.exports = router;
