import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([
    "First",
    "Second",
    "Third"
  ]);
  const [newItemText, setNewItemText] = useState("");

  const handle= (event) => {
    event.preventDefault();
    if (newItemText.trim() !== "") {
      setItems([...items, newItemText]);
      setNewItemText("");
    }
  };

  return (
    <div>
    
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form onSubmit={handle}>
        <label htmlFor="new-item">Add new item:</label>
        <input
          type="text"
          id="new-item"
          value={newItemText}
          onChange={(event) => setNewItemText(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
