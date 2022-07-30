const Todo = require("../models/Todo");

module.exports = {
  getAll,
  create,
  deleteTodo,
  update,
};

async function getAll(_req, res) {
  try {
    const todos = await Todo.query().orderBy('created_at', "desc");
    res.status(200).json({
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      details: error.message,
    });
  }
}

async function create(req, res) {
  try {
    const todo = await Todo.query().insert({
      todo: req.body.todo
    });
    res.status(200).json({
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      details: error.message,
    });
  }
}

async function deleteTodo(req, res) {
  try {
    const { id } = req.params;
    const result = await Todo.query().deleteById(id);
    res.status(200).json({
      data: result,
      message: "Todo deleted",
    });
  } catch (error) {
    res.status(500).json({
      details: error.message,
    });
  }
}

async function update(req, res) {
  try {
    const { id } = req.params;
    const todo = await Todo.query().patchAndFetchById(id, {
      todo: req.body.todo
    });

    res.status(200).json({
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      details: error.message,
    });
  }
}
