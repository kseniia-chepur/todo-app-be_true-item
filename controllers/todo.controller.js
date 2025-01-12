const todoService = require('../services/todo.service');
const responseMsg = require('../constants/responseMsg');

exports.createTodo = async (req, res) => {
  try {
    const newTodo = await todoService.createTodo(req.body);

    res.status(201).json({
      message: responseMsg.SUCCESS,
      todo: newTodo,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
    });
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await todoService.getAllTodos();

    res.status(200).json({
      message: responseMsg.SUCCESS,
      todos,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
    });
  }
};

exports.updateTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedTodo = await todoService.updateTodo(id, req.body);

    res.status(200).json({
      message: responseMsg.SUCCESS,
      todo: updatedTodo,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    await todoService.deleteTodo(id);

    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
    });
  }
};
