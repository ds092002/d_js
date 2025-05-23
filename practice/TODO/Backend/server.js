const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let todos = []; // In-memory list
let id = 1;

// Get all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post("/api/todos", (req, res) => {
  const newTodo = { id: id++, text: req.body.text };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo
app.put("/api/todos/:id", (req, res) => {
  const todo = todos.find(todo => todo.id === parseInt(req.params.id));
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  todo.text = req.body.text; // <-- use req.body here
  res.status(200).json(todo);
});


// Delete a todo
app.delete("/api/todos/:id", (req, res) => {
  todos = todos.filter(todo => todo.id !== parseInt(req.params.id));
  res.status(200).json({ message: "Deleted" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
