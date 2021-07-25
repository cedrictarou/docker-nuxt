const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todosController');

router.get('/', todosController.showTodos);
router.post('/', todosController.createTodo);
router.put('/', todosController.updateTodo);
router.delete('/:id', todosController.removeTodo);

module.exports = router;
