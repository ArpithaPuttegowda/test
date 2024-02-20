import React, { useState } from 'react';

function MyReversComp() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);

  const handleReorder = () => {
    setItems([...items.reverse()]);
  };

  return (
    <div>
      <button onClick={handleReorder}>Reverse Order</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyReversComp;
