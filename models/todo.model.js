const { model, Schema } = require('mongoose');

const todoSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    isEditable: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

const Todo = model('Todo', todoSchema);

module.exports = Todo;
