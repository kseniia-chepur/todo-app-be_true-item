const { Types } = require('mongoose');
const Todo = require('../models/Todo.model');
const errorMsg = require('../constants/errorMsg');

exports.createTodo = (data) => Todo.create(data);

exports.getAllTodos = () => Todo.find();

exports.updateTodo = async (id, updatedTodoField) => {
  const todo = await Todo.findById(id);
 
  if (!todo) {
    throw new Error(errorMsg.CLIENT_NOT_FOUND);
  }

  const key = Object.keys(updatedTodoField)[0];
  const value = Object.values(updatedTodoField)[0];

  todo[key] = value;

  return todo.save();
};

exports.deleteTodo = async (id) => {
  const isIdValid = Types.ObjectId.isValid(id);

  if (!isIdValid) {
    throw new Error(errorMsg.NOT_VALID_DATA);
  }

  const todo = await Todo.findById(id);

  if (!todo) {
    throw new Error(errorMsg.CLIENT_NOT_FOUND);
  }

  await Todo.deleteOne(todo);
};
