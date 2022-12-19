const express = require('express')
const router = express.Router()


// controllers
const { getTodos, getTodo } = require('../controllerss/todo')


// router
router.get('/todos', getTodos)
router.get('/todo/:id', getTodo)

module.exports = router