const { Todo } = require('../models');

module.exports = {
  showTodos: async (req, res) => {
    const todos = await Todo.findAll();
    res.json(todos);
  },
  createTodo: (req, res) => {
    const newTodo = {
      task: req.body.params,
      isDone: false,
    };
    Todo.create(newTodo);
  },
  updateTodo: async (req, res) => {
    const updatedTodo = req.body.params;
    console.log(updatedTodo);
    await Todo.update(
      { task: updatedTodo.task, isDone: updatedTodo.isDone },
      {
        where: {
          id: updatedTodo.id,
        },
      }
    );
  },
  removeTodo: async (req, res) => {
    const todo = req.params;
    await Todo.destroy({
      where: {
        id: todo.id,
      },
    });
  },
};
