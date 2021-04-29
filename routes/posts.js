const express = require('express')
const router = express.Router()
const postsController = require('../controllers/posts') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, postsController.getPosts)

router.post('/createPost', postsController.createPost)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deletePost', postsController.deletePost)

module.exports = router