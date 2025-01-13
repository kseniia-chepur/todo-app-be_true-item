const router = require('express').Router();
const {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} = require('../controllers/todo.controller');
const { validateTodoData } = require('../middlewares/todo.middleware');

router.post('/tasks', validateTodoData, createTodo);
router.get('/tasks', getTodos);
router.patch('/tasks/:id', updateTodo);
router.delete('/tasks/:id', deleteTodo);

module.exports = router;
