import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:5000/api/todos");
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (text.trim()) {
      const res = await axios.post("http://localhost:5000/api/todos", { text });
      setTodos([...todos, res.data]);
      setText("");
    }
  };

  const updatedTodo = async (id, updatedText) => {
    const res = await axios.put(`http://localhost:5000/api/todos/${id}`, {text: updatedText});
    setTodos(todos.map(todo => (todo.id === id ? res.data : todo )));
    setText("");
  }

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h2>Todo List</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} onChange={updatedTodo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
