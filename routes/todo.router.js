const router = require('express').Router();
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require('../controllers/todo.controller');
const { validateTodoData } = require('../middlewares/todo.middleware');

router.post('/', validateTodoData, createTodo);
router.get('/', getTodos);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
