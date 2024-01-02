import React, { useState } from 'react';

const Home = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Read a book', completed: false },
    { id: 2, text: 'Write code', completed: false },
    { id: 3, text: 'Take a walk', completed: false },
  ]);

  const toggleCompletion = (itemId) => {
    debugger
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <p>This is a simple React component with a list of items.</p>

      <ul>
        {items?.map((item) => (
          <li
            key={item.id}
            style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
            onClick={() => toggleCompletion(item.id)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
