const express = require('express');
const router = express.Router();

const { getUserWithPosts } = require("../controllers/getUserWithPosts")
const authMiddleware = require('../middlewares/authMiddleware');

         
router.get('/user/:userId', getUserWithPosts);        

module.exports = router;
