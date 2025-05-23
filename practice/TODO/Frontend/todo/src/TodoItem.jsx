import React, { useState } from "react";

function TodoItem({ todo, onDelete, onChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleUpdate = () => {
    onChange(todo.id, updatedText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <button onClick={handleUpdate} style={{ marginLeft: "0.5rem" }}>
            Save
          </button>
        </>
      ) : (
        <>
          {todo.text}
          <button onClick={() => setIsEditing(true)} style={{ marginLeft: "1rem" }}>
            Update
          </button>
        </>
      )}
      <button onClick={() => onDelete(todo.id)} style={{ marginLeft: "1rem" }}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
