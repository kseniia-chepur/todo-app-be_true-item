const { Types } = require('mongoose');
const Todo = require('../models/todo.model');
const errorMsg = require('../constants/errorMsg');

exports.createTodo = (data) => Todo.create(data);

exports.getAllTodos = () => Todo.find().sort({ createdAt: -1 });

exports.updateTodo = async (id, updatedTodo) => {
  const todo = await Todo.findById(id);

  if (!todo) {
    throw new Error(errorMsg.ENTITY_NOT_FOUND);
  }

  for (const key of Object.keys(updatedTodo)) {
    todo[key] = updatedTodo[key];
  }

  return todo.save();
};

exports.deleteTodo = async (id) => {
  const isIdValid = Types.ObjectId.isValid(id);

  if (!isIdValid) {
    throw new Error(errorMsg.NOT_VALID_DATA);
  }

  const todo = await Todo.findById(id);

  if (!todo) {
    throw new Error(errorMsg.ENTITY_NOT_FOUND);
  }

  await Todo.deleteOne(todo);
};
